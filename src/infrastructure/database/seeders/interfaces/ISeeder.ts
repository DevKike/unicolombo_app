export interface ISeeder {
  count(): Promise<number>;
  save(data: any): Promise<void>;
  run(): Promise<void>;
}
