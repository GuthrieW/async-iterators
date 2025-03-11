import { some } from "index";
import { describe, it, expect } from "vitest";

describe("some tests", () => {
  describe("handles different data types", () => {
    describe("truthy", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4, 5];
        const arrResult = numbers.some((number) => number === 5);
        const asyncResult = await some(numbers, async (number) => number === 5);
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d", "e"];
        const arrResult = strings.some((s) => s === "e");
        const asyncResult = await some(strings, async (s) => s === "e");
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false, true];
        const arrResult = objects.some((bool) => bool);
        const asyncResult = await some(objects, async (bool) => bool);
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
        const arrResult = objects.some((obj) => obj.val === "e");
        const asyncResult = await some(objects, async (obj) => obj.val === "e");
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });
    });
    describe("falsy", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4];
        const arrResult = numbers.some((number) => number === 5);
        const asyncResult = await some(numbers, async (number) => number === 5);
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d"];
        const arrResult = strings.some((s) => s === "e");
        const asyncResult = await some(strings, async (s) => s === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false];
        const arrResult = objects.some((bool) => bool);
        const asyncResult = await some(objects, async (bool) => bool);
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of objects", async () => {
        const objects = [
          { val: "a" },
          { val: "b" },
          { val: "c" },
          { val: "d" },
        ];
        const arrResult = objects.some((obj) => obj.val === "e");
        const asyncResult = await some(objects, async (obj) => obj.val === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of undefineds", async () => {
        const objects = [undefined, undefined, undefined, undefined, undefined];
        const arrResult = objects.some((u) => u === "e");
        const asyncResult = await some(objects, async (u) => u === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of nulls", async () => {
        const objects = [null, null, null, null, null];
        const arrResult = objects.some((n) => n === "e");
        const asyncResult = await some(objects, async (n) => n === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });
    });
  });
});
