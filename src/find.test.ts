import find from "./find";
import { describe, it, expect } from "vitest";

describe("find tests", () => {
  describe("truthy", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [1, 2, 3, 4, 5];
      const arrResult: number | undefined = numbers.find(
        (number) => number === 5
      );
      const asyncResult: number | undefined = await find(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(5);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["a", "b", "c", "d", "e"];
      const arrResult: string | undefined = strings.find((s) => s === "e");
      const asyncResult: string | undefined = await find(
        strings,
        async (s) => s === "e"
      );
      expect(asyncResult).toBe("e");
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [false, false, false, false, true];
      const arrResult: boolean | undefined = objects.find((bool) => bool);
      const asyncResult: boolean | undefined = await find(
        objects,
        async (bool) => bool
      );
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
      const arrResult: { val: string } | undefined = objects.find(
        (obj) => obj.val === "e"
      );
      const asyncResult: { val: string } | undefined = await find(
        objects,
        async (obj) => obj.val === "e"
      );
      expect(asyncResult).toEqual(expect.objectContaining({ val: "e" }));
      expect(arrResult).toEqual(asyncResult);
    });
  });
  describe("falsy", () => {
    it("array of numbers", async () => {
      const numbers: number[] = [1, 2, 3, 4];
      const arrResult: number | undefined = numbers.find(
        (number) => number === 5
      );
      const asyncResult: number | undefined = await find(
        numbers,
        async (number) => number === 5
      );
      expect(asyncResult).toBe(undefined);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of strings", async () => {
      const strings: string[] = ["a", "b", "c", "d"];
      const arrResult: string | undefined = strings.find((s) => s === "e");
      const asyncResult: string | undefined = await find(
        strings,
        async (s) => s === "e"
      );
      expect(asyncResult).toBe(undefined);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of booleans", async () => {
      const objects: boolean[] = [false, false, false, false];
      const arrResult: boolean | undefined = objects.find((bool) => bool);
      const asyncResult: boolean | undefined = await find(
        objects,
        async (bool) => bool
      );
      expect(asyncResult).toBe(undefined);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of objects", async () => {
      const objects: { val: string }[] = [
        { val: "a" },
        { val: "b" },
        { val: "c" },
        { val: "d" },
      ];
      const arrResult: { val: string } | undefined = objects.find(
        (obj) => obj.val === "e"
      );
      const asyncResult: { val: string } | undefined = await find(
        objects,
        async (obj) => obj.val === "e"
      );
      expect(asyncResult).toBe(undefined);
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
      const arrResult: any | undefined = objects.find((u) => u === "e");
      const asyncResult: any | undefined = await find(
        objects,
        async (u) => u === "e"
      );
      expect(asyncResult).toBe(undefined);
      expect(arrResult).toEqual(asyncResult);
    });

    it("array of nulls", async () => {
      const objects: any[] = [null, null, null, null, null];
      const arrResult: any | undefined = objects.find((n) => n === "e");
      const asyncResult: any | undefined = await find(
        objects,
        async (n) => n === "e"
      );
      expect(asyncResult).toBe(undefined);
      expect(arrResult).toEqual(asyncResult);
    });
  });
});
