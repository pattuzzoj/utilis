export class Queue<T> {
  private queue: T[];
  private capacity: number;
  private head: number;
  private tail: number;

  constructor(size: number) {
    this.queue = new Array(size);
    this.capacity = size;
    this.head = this.tail = -1;
  }

  public enqueue(value: T) {
    if(this.isFull()) return;

    if(this.head === -1) {
      this.head = this.tail = 0;
    } else {
      
    }

    this.queue[++this.tail] = value;
  }

  public dequeue() {
    if(this.isEmpty()) return;

    return this.queue[++this.head];
  }

  public peek() {
    return this.queue[this.head];
  }

  public isEmpty() {
    return this.head === this.tail; 
  }

  public isFull() {
    return this.queue.length === this.capacity;
  }
}

export default function queue<T>() {
  const list: T[] = [];

  return {
    enqueue: (value: T) => list.push(value),
    dequeue: () => list.shift(),
    peek: () => list[0],
    isEmpty: () => list.length === 0,
    toString: () => list
  };
}