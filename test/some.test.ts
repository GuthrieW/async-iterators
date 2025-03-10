import { some } from "index";
import { describe, it, expect } from "vitest";

describe("some tests", () => {
  describe("truthy", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [1, 2, 3, 4, 5];
      const arrResult: boolean = numbers.some((number) => number === 5);
      const asyncResult: boolean = await some(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["a", "b", "c", "d", "e"];
      const arrResult: boolean = strings.some((s) => s === "e");
      const asyncResult: boolean = await some(strings, async (s) => s === "e");
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [false, false, false, false, true];
      const arrResult: boolean = objects.some((bool) => bool);
      const asyncResult: boolean = await some(objects, async (bool) => bool);
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of objects", async () => {
      const objects: { val: string }[] = [
        { val: "a" },
        { val: "b" },
        { val: "c" },
        { val: "d" },
        { val: "e" },
      ];
      const arrResult: boolean = objects.some((obj) => obj.val === "e");
      const asyncResult: boolean = await some(
        objects,
        async (obj) => obj.val === "e"
      );
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });
  });
  describe("falsy", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [1, 2, 3, 4];
      const arrResult: boolean = numbers.some((number) => number === 5);
      const asyncResult: boolean = await some(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["a", "b", "c", "d"];
      const arrResult: boolean = strings.some((s) => s === "e");
      const asyncResult: boolean = await some(strings, async (s) => s === "e");
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [false, false, false, false];
      const arrResult: boolean = objects.some((bool) => bool);
      const asyncResult: boolean = await some(objects, async (bool) => bool);
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of objects", async () => {
      const objects: { val: string }[] = [
        { val: "a" },
        { val: "b" },
        { val: "c" },
        { val: "d" },
      ];
      const arrResult: boolean = objects.some((obj) => obj.val === "e");
      const asyncResult: boolean = await some(
        objects,
        async (obj) => obj.val === "e"
      );
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of undefineds", async () => {
      const objects: any[] = [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ];
      const arrResult: boolean = objects.some((u) => u === "e");
      const asyncResult: boolean = await some(objects, async (u) => u === "e");
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of nulls", async () => {
      const objects: any[] = [null, null, null, null, null];
      const arrResult: boolean = objects.some((n) => n === "e");
      const asyncResult: boolean = await some(objects, async (n) => n === "e");
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
