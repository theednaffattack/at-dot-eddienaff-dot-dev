export class MessageBubbleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MessageBubbleError";
  }
}
