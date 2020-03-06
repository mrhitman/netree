import fs from "fs";
import { promisify } from "util";
import { DataProvider } from "./data-provider";
import _ from "highland";

const appendFile = promisify(fs.appendFile);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const truncate = promisify(fs.truncate);

export class TxtDataProvider extends DataProvider {
  constructor(protected readonly fileName: string) {
    super();

    fs.closeSync(fs.openSync(fileName, "a"));
  }

  public async save(data: any) {
    return appendFile(this.fileName, `${data}\n`);
  }

  public async read() {
    return (await readFile(this.fileName, "utf8")).split("\n").filter(Boolean);
  }

  public readStream<T>(): Highland.Stream<T> {
    return _<T>(fs.createReadStream(this.fileName, "utf8"));
  }

  public async truncate() {
    return truncate(this.fileName, 0);
  }

  public async search(f: (line: string) => boolean) {
    return (await this.read()).filter(line => f(line));
  }

  public async update(oldLine: string, newLine: string) {
    const lines = await this.read();

    return writeFile(
      this.fileName,
      lines.map((line, i) => (line === oldLine ? newLine : line)).join("\n")
    );
  }

  public async delete(line: string) {
    const lines = await this.read();

    return writeFile(this.fileName, lines.filter(l => l !== line).join("\n"));
  }
}

export default TxtDataProvider;
