export class InvalidFileFormatException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidFileFormatException";
  }
}
