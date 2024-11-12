export class NotFileExtensionAllowed extends Error {
  constructor(message: string) {
    super(message);
    this.name = "notFileExtensionAllowed";
  }
}
