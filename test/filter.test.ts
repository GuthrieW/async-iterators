import { filter } from "index";
import { describe, it, expect } from "vitest";

describe("filter tests", () => {
  it("array of numbers", async () => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const arrResult: number[] = numbers.filter((number) => number === 5);
    const asyncResult: number[] = await filter(
      numbers,
      async (number) => number === 5
    );
    expect(arrResult).toEqual(asyncResult);
  });

  it("array of strings", async () => {
    const strings: string[] = ["a", "b", "c", "d", "e"];
    const arrResult: string[] = strings.filter((s) => s === "e");
    const asyncResult: string[] = await filter(strings, async (s) => s === "e");
    expect(arrResult).toEqual(asyncResult);
  });

  it("array of booleans", async () => {
    const objects: boolean[] = [false, false, false, false, true];
    const arrResult: boolean[] = objects.filter((bool) => bool);
    const asyncResult: boolean[] = await filter(objects, async (bool) => bool);
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
    const arrResult: { val: string }[] = objects.filter(
      (obj) => obj.val === "e"
    );
    const asyncResult: { val: string }[] = await filter(
      objects,
      async (obj) => obj.val === "e"
    );
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
    const arrResult: boolean[] = objects.filter((u) => u === "e");
    const asyncResult: boolean[] = await filter(
      objects,
      async (u) => u === "e"
    );
    expect(arrResult).toEqual(asyncResult);
  });

  it("array of nulls", async () => {
    const objects: any[] = [null, null, null, null, null];
    const arrResult: any[] = objects.filter((n) => n === "e");
    const asyncResult: any[] = await filter(objects, async (n) => n === "e");
    expect(arrResult).toEqual(asyncResult);
  });

  it("non-boolean return value", async () => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const arrResult: number[] = numbers.filter((n) => n * 2);
    const asyncResult: number[] = await filter(numbers, async (n) =>
      Boolean(n * 2)
    );
    expect(arrResult).toEqual(asyncResult);
  });
});
