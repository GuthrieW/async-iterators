import every from "./every";
import { describe, it, expect } from "vitest";

describe("every tests", () => {
  describe("isTrue", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [5, 5, 5, 5, 5];
      const arrResult: boolean = numbers.every((number) => number === 5);
      const asyncResult: boolean = await every(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["e", "e", "e", "e", "e"];
      const arrResult: boolean = strings.every((s) => s === "e");
      const asyncResult: boolean = await every(strings, async (s) => s === "e");
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [true, true, true, true, true];
      const arrResult: boolean = objects.every((bool) => bool);
      const asyncResult: boolean = await every(objects, async (bool) => bool);
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of objects", async () => {
      const objects: { val: string }[] = [
        { val: "e" },
        { val: "e" },
        { val: "e" },
        { val: "e" },
        { val: "e" },
      ];
      const arrResult: boolean = objects.every((obj) => obj.val === "e");
      const asyncResult: boolean = await every(
        objects,
        async (obj) => obj.val === "e"
      );
      expect(asyncResult).toBe(true);
      expect(arrResult).toEqual(asyncResult);
    });
  });
  describe("isFalse", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [1, 2, 3, 4, 5];
      const arrResult: boolean = numbers.every((number) => number === 5);
      const asyncResult: boolean = await every(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["a", "b", "c", "d", "e"];
      const arrResult: boolean = strings.every((s) => s === "e");
      const asyncResult: boolean = await every(strings, async (s) => s === "e");

      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [false, false, false, false, true];
      const arrResult: boolean = objects.every((bool) => bool);
      const asyncResult: boolean = await every(objects, async (bool) => bool);
      expect(asyncResult).toBe(false);
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
      const arrResult: boolean = objects.every((obj) => obj.val === "e");
      const asyncResult: boolean = await every(
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
      const arrResult: boolean = objects.every((u) => u === "e");
      const asyncResult: boolean = await every(objects, async (u) => u === "e");
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of nulls", async () => {
      const objects: any[] = [null, null, null, null, null];
      const arrResult: boolean = objects.every((n) => n === "e");
      const asyncResult: boolean = await every(objects, async (n) => n === "e");
      expect(asyncResult).toBe(false);
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
