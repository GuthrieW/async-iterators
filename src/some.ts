import { BooleanIterator } from ".";

export default async function some<T>(
  array: T[],
  iterator: BooleanIterator<T>
): Promise<boolean> {
  if (!Array.isArray(array) || !array?.length) return false;
  for (let i = 0; i < array.length; i++) {
    const element = array.at(i) as T;
    const result = await iterator(element, i);
    if (result) {
      return true;
    }
  }
  return false;
}
