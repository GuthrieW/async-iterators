import { reduceRight } from "index";
import { describe, it, expect } from "vitest";

describe("reduceRight tests", () => {
  describe("handles different data types", () => {
    it("array of numbers", async () => {
      const numbers = [1, 2, 3, 4, 5];
      const arrResult = numbers.reduceRight(
        (prev, current) => prev + current,
        0
      );
      const asyncResult = await reduceRight(
        numbers,
        async (prev, current) => prev + current,
        0
      );
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings = ["a", "b", "c", "d", "e"];
      const arrResult = strings.reduceRight(
        (prev, current) => prev + current,
        ""
      );
      const asyncResult = await reduceRight(
        strings,
        async (prev, current) => prev + current,
        ""
      );
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
