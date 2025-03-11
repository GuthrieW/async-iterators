import { findLastIndex } from "index";
import { describe, it, expect } from "vitest";

describe("findIndex tests", () => {
  describe("handles different data types", () => {
    describe("finds index of value", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4, 5];
        const arrResult = numbers.findLastIndex((number) => number === 5);
        const asyncResult = await findLastIndex(
          numbers,
          async (number) => number === 5
        );
        expect(asyncResult).toBe(4);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d", "e"];
        const arrResult = strings.findLastIndex((s) => s === "e");
        const asyncResult = await findLastIndex(
          strings,
          async (s) => s === "e"
        );
        expect(asyncResult).toBe(4);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false, true];
        const arrResult = objects.findLastIndex((bool) => bool);
        const asyncResult = await findLastIndex(objects, async (bool) => bool);
        expect(asyncResult).toBe(4);
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
        const arrResult = objects.findLastIndex((obj) => obj.val === "e");
        const asyncResult = await findLastIndex(
          objects,
          async (obj) => obj.val === "e"
        );
        expect(asyncResult).toEqual(4);
        expect(arrResult).toEqual(asyncResult);
      });
    });

    describe("does not find index of value", () => {
      it("array of numbers", async () => {
        const numbers = [1, 2, 3, 4];
        const arrResult = numbers.findLastIndex((number) => number === 5);
        const asyncResult = await findLastIndex(
          numbers,
          async (number) => number === 5
        );
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of strings", async () => {
        const strings = ["a", "b", "c", "d"];
        const arrResult = strings.findLastIndex((s) => s === "e");
        const asyncResult = await findLastIndex(
          strings,
          async (s) => s === "e"
        );
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of booleans", async () => {
        const objects = [false, false, false, false];
        const arrResult = objects.findLastIndex((bool) => bool);
        const asyncResult = await findLastIndex(objects, async (bool) => bool);
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of objects", async () => {
        const objects = [
          { val: "a" },
          { val: "b" },
          { val: "c" },
          { val: "d" },
        ];
        const arrResult = objects.findLastIndex((obj) => obj.val === "e");
        const asyncResult = await findLastIndex(
          objects,
          async (obj) => obj.val === "e"
        );
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of undefineds", async () => {
        const objects = [undefined, undefined, undefined, undefined, undefined];
        const arrResult = objects.findLastIndex((u) => u === "e");
        const asyncResult = await findLastIndex(
          objects,
          async (u) => u === "e"
        );
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });

      it("array of nulls", async () => {
        const objects = [null, null, null, null, null];
        const arrResult = objects.findLastIndex((n) => n === "e");
        const asyncResult = await findLastIndex(
          objects,
          async (n) => n === "e"
        );
        expect(asyncResult).toBe(-1);
        expect(arrResult).toEqual(asyncResult);
      });
    });
  });
});
