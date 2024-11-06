export interface IFile {
  name: string;
  data: Buffer;
  mimetype: string;
  size?: number;
  mv: (path: string) => Promise<void>;
}
