export class SeederException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SeederException";
  }
}
