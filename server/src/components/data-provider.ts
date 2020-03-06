import highland from "highland";

export abstract class DataProvider {
  constructor() {}

  abstract async save(data: any): Promise<void>;
  abstract async read(): Promise<any>;
  abstract readStream<T>(): Highland.Stream<T>;
  abstract async search(f: (line: string) => boolean): Promise<any>;
  abstract async truncate(): Promise<any>;
  abstract async update(oldItem: any, newItem: any): Promise<any>;
  abstract async delete(item: any): Promise<any>;
}

export default DataProvider;
