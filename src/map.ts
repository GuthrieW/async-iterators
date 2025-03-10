import { ArrayIterator } from ".";

export default async function map<T, V>(
  array: T[],
  iterator: ArrayIterator<T, V>
): Promise<V[] | undefined> {
  if (!Array.isArray(array) || !array?.length) return;

  const results: V[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    results.push(await iterator(element, i));
  }
  return results;
}
