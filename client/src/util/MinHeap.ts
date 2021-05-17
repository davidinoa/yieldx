interface HasValue {
  value: number;
}

export default class MinHeap<T extends HasValue> {
  private readonly maxSize: number;

  private size: number;

  private readonly heap: T[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.size = 0;
    this.heap = new Array(maxSize + 1).fill({ value: 0 });
    this.heap[0].value = -Number.MAX_VALUE;
  }

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyIndex(i: number) {
    // Do nothing for leaf nodes
    if (i > this.size / 2) {
      return;
    }

    const leftIndex = 2 * i;
    const rightIndex = leftIndex + 1;
    const currentValue = this.heap[i].value;
    const leftValue = this.heap[leftIndex].value;
    const rightValue = this.heap[rightIndex].value;
    if (currentValue > leftValue || currentValue > rightValue) {
      if (leftValue < rightValue) {
        // Swap with the left child and heapify the left child
        this.swap(i, leftIndex);
        this.heapifyIndex(leftIndex);
      } else {
        // Swap with the right child and heapify the right child
        this.swap(i, rightIndex);
        this.heapifyIndex(rightIndex);
      }
    }
  }

  insert(element: T) {
    if (this.size >= this.maxSize) {
      return;
    }
    this.size += 1;
    this.heap[this.size] = element;
    let current = this.size;
    let parent = Math.floor(current / 2);
    while (this.heap[current].value < this.heap[parent].value) {
      this.swap(current, parent);
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  pop(): T {
    const popped = this.heap[1];
    this.heap[1] = this.heap[this.size];
    this.size -= 1;
    this.heapifyIndex(1);
    return popped;
  }

  peek(): T {
    return this.heap[1];
  }
}
