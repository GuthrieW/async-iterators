import { every } from "index";
import { describe, it, expect } from "vitest";

describe("every tests", () => {
  describe("handles different data types", () => {
    describe("truthy", () => {
      it("array of numbers", async () => {
        const numbers = [5, 5, 5, 5, 5];
        const arrResult = numbers.every((number) => number === 5);
        const asyncResult = await every(
          numbers,
          async (number) => number === 5
        );
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["e", "e", "e", "e", "e"];
        const arrResult = strings.every((s) => s === "e");
        const asyncResult = await every(strings, async (s) => s === "e");
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [true, true, true, true, true];
        const arrResult = objects.every((bool) => bool);
        const asyncResult = await every(objects, async (bool) => bool);
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of objects", async () => {
        const objects = [
          { val: "e" },
          { val: "e" },
          { val: "e" },
          { val: "e" },
          { val: "e" },
        ];
        const arrResult = objects.every((obj) => obj.val === "e");
        const asyncResult = await every(
          objects,
          async (obj) => obj.val === "e"
        );
        expect(asyncResult).toBe(true);
        expect(arrResult).toEqual(asyncResult);
      });
    });

    describe("falsy", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4, 5];
        const arrResult = numbers.every((number) => number === 5);
        const asyncResult = await every(
          numbers,
          async (number) => number === 5
        );
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d", "e"];
        const arrResult = strings.every((s) => s === "e");
        const asyncResult = await every(strings, async (s) => s === "e");

        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false, true];
        const arrResult = objects.every((bool) => bool);
        const asyncResult = await every(objects, async (bool) => bool);
        expect(asyncResult).toBe(false);
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
        const arrResult = objects.every((obj) => obj.val === "e");
        const asyncResult = await every(
          objects,
          async (obj) => obj.val === "e"
        );
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of undefineds", async () => {
        const objects = [undefined, undefined, undefined, undefined, undefined];
        const arrResult = objects.every((u) => u === "e");
        const asyncResult = await every(objects, async (u) => u === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of nulls", async () => {
        const objects = [null, null, null, null, null];
        const arrResult = objects.every((n) => n === "e");
        const asyncResult = await every(objects, async (n) => n === "e");
        expect(asyncResult).toBe(false);
        expect(arrResult).toEqual(asyncResult);
      });
    });
  });
});
