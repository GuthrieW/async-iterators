import { find } from "index";
import { describe, it, expect } from "vitest";

describe("find tests", () => {
  describe("handles different data types", () => {
    describe("finds value", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4, 5];
        const arrResult = numbers.find((number) => number === 5);
        const asyncResult = await find(numbers, async (number) => number === 5);
        expect(asyncResult).toBe(5);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d", "e"];
        const arrResult = strings.find((s) => s === "e");
        const asyncResult = await find(strings, async (s) => s === "e");
        expect(asyncResult).toBe("e");
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false, true];
        const arrResult = objects.find((bool) => bool);
        const asyncResult = await find(objects, async (bool) => bool);
        expect(asyncResult).toBe(true);
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
        const arrResult = objects.find((obj) => obj.val === "e");
        const asyncResult = await find(objects, async (obj) => obj.val === "e");
        expect(asyncResult).toEqual(expect.objectContaining({ val: "e" }));
        expect(arrResult).toEqual(asyncResult);
      });
    });

    describe("does not find value", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4];
        const arrResult = numbers.find((number) => number === 5);
        const asyncResult = await find(numbers, async (number) => number === 5);
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d"];
        const arrResult = strings.find((s) => s === "e");
        const asyncResult = await find(strings, async (s) => s === "e");
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false];
        const arrResult = objects.find((bool) => bool);
        const asyncResult = await find(objects, async (bool) => bool);
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of objects", async () => {
        const objects = [
          { val: "a" },
          { val: "b" },
          { val: "c" },
          { val: "d" },
        ];
        const arrResult = objects.find((obj) => obj.val === "e");
        const asyncResult = await find(objects, async (obj) => obj.val === "e");
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of undefineds", async () => {
        const objects = [undefined, undefined, undefined, undefined, undefined];
        const arrResult = objects.find((u) => u === "e");
        const asyncResult = await find(objects, async (u) => u === "e");
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of nulls", async () => {
        const objects = [null, null, null, null, null];
        const arrResult = objects.find((n) => n === "e");
        const asyncResult = await find(objects, async (n) => n === "e");
        expect(asyncResult).toBe(undefined);
        expect(arrResult).toEqual(asyncResult);
      });
    });
  });
});
