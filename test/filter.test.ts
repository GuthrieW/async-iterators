import { filter } from "index";
import { describe, it, expect } from "vitest";

describe("filter tests", () => {
  describe("handles different data types", () => {
    it("array of numbers", async () => {
      const numbers = [1, 2, 3, 4, 5];
      const arrResult = numbers.filter((number) => number === 5);
      const asyncResult = await filter(numbers, async (number) => number === 5);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings = ["a", "b", "c", "d", "e"];
      const arrResult = strings.filter((s) => s === "e");
      const asyncResult = await filter(strings, async (s) => s === "e");
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects = [false, false, false, false, true];
      const arrResult = objects.filter((bool) => bool);
      const asyncResult = await filter(objects, async (bool) => bool);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of objects", async () => {
      const objects = [
        { val: "a" },
        { val: "b" },
        { val: "c" },
        { val: "d" },
        { val: "e" },
      ];
      const arrResult = objects.filter((obj) => obj.val === "e");
      const asyncResult = await filter(objects, async (obj) => obj.val === "e");
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of undefineds", async () => {
      const objects = [undefined, undefined, undefined, undefined, undefined];
      const arrResult = objects.filter((u) => u === "e");
      const asyncResult = await filter(objects, async (u) => u === "e");
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of nulls", async () => {
      const objects = [null, null, null, null, null];
      const arrResult = objects.filter((n) => n === "e");
      const asyncResult = await filter(objects, async (n) => n === "e");
      expect(arrResult).toEqual(asyncResult);
    });

    it("non-boolean return value", async () => {
      const numbers = [1, 2, 3, 4, 5];
      const arrResult = numbers.filter((n) => n * 2);
      const asyncResult = await filter(numbers, async (n) => Boolean(n * 2));
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
