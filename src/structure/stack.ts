export class Stack<T> {
  private stack: T[];
  private capacity: number;
  private top: number;

  constructor(size: number) {
    this.stack = new Array(size);
    this.top = -1;
    this.capacity = size;
  }

  public push(value: T) {
    if(this.isFull()) return;

    this.stack[++this.top] = value;
  }

  public pop() {
    if(this.isEmpty()) return;

    this.stack[this.top--] = undefined;
  }

  public peek() {
    return this.stack[this.top];
  }

  public isEmpty() {
    return this.top === -1;
  }

  public isFull() {
    return this.top === this.capacity - 1;
  }

  public size() {
    return this.top - 1;
  }

  public print() {
    return this.stack;
  }
}