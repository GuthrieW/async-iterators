import { reduce } from "index";
import { describe, it, expect } from "vitest";

describe("reduce tests", () => {
  it("array of numbers", async () => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const arrResult: number = numbers.reduce(
      (prev, current) => prev + current,
      0
    );
    const asyncResult: number = await reduce(
      numbers,
      async (prev, current) => prev + current,
      0
    );
    expect(arrResult).toEqual(asyncResult);
  });

  it("array of strings", async () => {
    const strings: string[] = ["a", "b", "c", "d", "e"];
    const arrResult: string = strings.reduce(
      (prev, current) => prev + current,
      ""
    );
    const asyncResult: string = await reduce(
      strings,
      async (prev, current) => prev + current,
      ""
    );
    expect(arrResult).toEqual(asyncResult);
  });
});
