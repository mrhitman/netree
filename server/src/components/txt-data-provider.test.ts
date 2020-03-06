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
  });
});
