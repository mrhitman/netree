import * as fs from "fs";
import { chain, trim } from "lodash";
import { promisify } from "util";
import { DataProvider } from "./data-provider";

const appendFile = promisify(fs.appendFile);
const readFile = promisify(fs.readFile);

export class GraphFileDataProvider extends DataProvider {
  constructor(protected readonly fileName: string) {
    super();

    fs.closeSync(fs.openSync(fileName, "w"));
  }

  public async save(data: any) {
    return appendFile(this.fileName, `${data}\n`);
  }

  public async read() {
    return chain(await readFile(this.fileName, "utf8"))
      .split("\n")
      .map(trim)
      .compact()
      .value();
  }

  public async search(f: (line: string) => boolean) {
    return (await this.read()).filter(line => f(line));
  }
}

export default GraphFileDataProvider;
