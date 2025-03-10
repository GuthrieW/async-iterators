import { reduceRight } from "index";
import { describe, it, expect } from "vitest";

describe("reduceRight tests", () => {
  it("array of numbers", async () => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const arrResult: number = numbers.reduceRight(
      (prev, current) => prev + current,
      0
    );
    const asyncResult: number = await reduceRight(
      numbers,
      async (prev, current) => prev + current,
      0
    );
    expect(arrResult).toEqual(asyncResult);
  });

  it("array of strings", async () => {
    const strings: string[] = ["a", "b", "c", "d", "e"];
    const arrResult: string = strings.reduceRight(
      (prev, current) => prev + current,
      ""
    );
    const asyncResult: string = await reduceRight(
      strings,
      async (prev, current) => prev + current,
      ""
    );
    expect(arrResult).toEqual(asyncResult);
  });
});
