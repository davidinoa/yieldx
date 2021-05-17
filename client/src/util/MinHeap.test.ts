import MinHeap from "./MinHeap";

describe("MinHeap", () => {
  test("blah", () => {
    const minHeap = new MinHeap(15);
    minHeap.insert({ value: 5 });
    minHeap.insert({ value: 3 });
    minHeap.insert({ value: 17 });
    minHeap.insert({ value: 10 });
    minHeap.insert({ value: 84 });
    minHeap.insert({ value: 19 });
    minHeap.insert({ value: 6 });
    minHeap.insert({ value: 22 });
    minHeap.insert({ value: 9 });
    expect(minHeap.pop().value).toEqual(3);
    expect(minHeap.pop().value).toEqual(5);
    expect(minHeap.pop().value).toEqual(6);
    expect(minHeap.pop().value).toEqual(9);
    expect(minHeap.pop().value).toEqual(10);
    minHeap.insert({ value: 58 });
    expect(minHeap.pop().value).toEqual(17);
    expect(minHeap.pop().value).toEqual(19);
    expect(minHeap.pop().value).toEqual(22);
    expect(minHeap.pop().value).toEqual(58);
    expect(minHeap.pop().value).toEqual(84);
  });
});
