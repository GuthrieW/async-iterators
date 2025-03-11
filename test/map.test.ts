import { map } from "index";
import { describe, it, expect } from "vitest";
import { sleep } from "./utils";

describe("map tests", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
});

describe("mapParallel tests", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expectedDoubledNumbers = numbers.map((number) => number * 2);

  it("correctly iterates without batching", async () => {
    const indices: number[] = [];

    await map(numbers, async (number, index) => {
      await sleep(12 - index);
      indices.push(index);
    });
    expect(indices).to.eql(numbers.map((number) => number - 1));
  });

  it("returns all values when passed a batch options", async () => {
    const doubledNumbers = await map(
      numbers,
      async (number) => {
        await sleep(number);
        return number * 2;
      },
      { batchIterations: true, batchSize: 5 }
    );
    expect(doubledNumbers).to.eql(expectedDoubledNumbers);
  });

  it("returns all values when passed a batchSize larger than the length of the array", async () => {
    const doubledNumbers = await map(
      numbers,
      async (number) => {
        await sleep(number);
        return number * 2;
      },
      { batchIterations: true, batchSize: 20 }
    );
    expect(doubledNumbers).to.eql(expectedDoubledNumbers);
  });

  it("correctly iterates", async () => {
    const indices: number[] = [];
    await map(
      numbers,
      async (number, i) => {
        indices.push(i);
      },
      { batchIterations: true, batchSize: 5 }
    );
    expect(indices).to.eql(numbers.map((number) => number - 1));
  });

  it("does not wait for all tasks in a batch to finish before starting any new ones", async () => {
    const start = Date.now();
    await map(
      numbers,
      async (number) => {
        await sleep(number * 100); // wait `number` deciseconds
        return number;
      },
      { batchIterations: true, batchSize: 10 }
    );
    const end = Date.now();
    // waiting for the first ten to finish and then starting on the 11th would result in a delay of 10 + 11 = 21ds
    // starting the 11th after the first resolves would result in a delay of only 1 + 11 = 12ds
    expect(end - start).to.be.lessThan(20 * 100);
  });
});
