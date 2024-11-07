export class InvalidFileTypeException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "invalidFileTypeException";
  }
}
