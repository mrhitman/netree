import TxtDataProvider from "./txt-data-provider";
import chance from "chance";
import fs from "fs";

describe("TxtFile", () => {
  function readContent(name: string) {
    return fs
      .readFileSync(name)
      .toString()
      .split("\n")
      .filter(Boolean);
  }

  test("Create file", () => {
    const name = chance().word() + ".txt";
    new TxtDataProvider(name);

    expect(fs.existsSync(name)).toBeTruthy;
    fs.unlinkSync(name);
  });

  describe("IO", () => {
    let name: string;
    let provider: TxtDataProvider;

    beforeEach(() => {
      name = chance().word() + ".txt";
      provider = new TxtDataProvider(name);
    });

    afterEach(() => {
      fs.unlinkSync(name);
    });

    test("Simple append", async () => {
      let content = readContent(name);

      expect(content).toHaveLength(0);

      await provider.save(chance().word());
      await provider.save(chance().word());

      content = readContent(name);
      expect(content).toHaveLength(2);
    });

    test("Clear", async () => {
      await provider.save(chance().word());
      await provider.save(chance().word());

      let content = readContent(name);
      expect(content).toHaveLength(2);

      await provider.truncate();

      content = readContent(name);
      expect(content).toHaveLength(0);
    });

    test("Simple read", async () => {
      for (let i = 0; i < 10; i++) {
        await provider.save(chance().word());
      }
      const content = await readContent(name);
      expect(content).toHaveLength(10);
    });

    test("Simle update", async () => {
      const line = chance().word({ length: 10 });
      await provider.save(line);
      await provider.save(chance().word({ length: 10 }));

      let content = await readContent(name);
      const newLine = chance().word({ length: 10 });
      await provider.update(line, newLine);

      content = await readContent(name);
      expect(content).toHaveLength(2);
      expect(content.includes(newLine)).toBeTruthy;
      expect(content.includes(line)).toBeFalsy;
    });

    test("Simple delete", async () => {
      const line = chance().word({ length: 10 });
      await provider.save(line);
      await provider.save(chance().word({ length: 10 }));

      let content = await readContent(name);
      expect(content).toHaveLength(2);
      await provider.delete(line);

      content = await readContent(name);
      expect(content).toHaveLength(1);
    });

    test("Read stream", async () => {
      const init: string[] = [];
      for (let i = 0; i < 10; i++) {
        const data = chance().word();
        init.push(data);
        await provider.save(data);
      }

      let count = 0;
      provider
        .readStream<string>()
        .split()
        .filter(Boolean)
        .each(line => {
          expect(init.includes(line)).toBeTruthy;
          count++;
        })
        .done(() => {
          expect(count).toBe(10);
        });
    });
  });
});
