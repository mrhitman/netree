export abstract class DataProvider {
  constructor() {}

  abstract async save(data: any): Promise<void>;
  abstract async read(): Promise<any>;
  abstract async search(f: (line: string) => boolean): Promise<any>;
}

export default DataProvider;
