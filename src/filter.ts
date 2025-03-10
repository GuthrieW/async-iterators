import { BooleanIterator } from ".";

export default async function filter<T>(
  array: T[],
  iterator: BooleanIterator<T>
): Promise<T[]> {
  if (!Array.isArray(array) || !array?.length) return [];
  const results: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const result = await iterator(array[i], i);
    if (result) results.push(array[i]);
  }
  return results;
}
