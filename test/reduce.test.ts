import { reduce } from "index";
import { describe, it, expect } from "vitest";

describe("reduce tests", () => {
  describe("handles different data types", () => {
    it("array of numbers", async () => {
      const numbers = [1, 2, 3, 4, 5];
      const arrResult = numbers.reduce((prev, current) => prev + current, 0);
      const asyncResult = await reduce(
        numbers,
        async (prev, current) => prev + current,
        0
      );
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings = ["a", "b", "c", "d", "e"];
      const arrResult = strings.reduce((prev, current) => prev + current, "");
      const asyncResult = await reduce(
        strings,
        async (prev, current) => prev + current,
        ""
      );
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
