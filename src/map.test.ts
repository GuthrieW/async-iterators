// @ts-strict-ignore
import { sleep } from "./utils/sleep";
import map from "./map";
import { describe, it, expect } from "vitest";

describe("map tests", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  it("correctly iterates", async () => {
    const indices: number[] = [];

    await map(numbers, async (number, index) => {
      await sleep(12 - index);
      indices.push(index);
    });
    expect(indices).to.eql(numbers.map((number) => number - 1));
  });
});
