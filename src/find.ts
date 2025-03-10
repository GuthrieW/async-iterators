export default async function find<T>(
  array: T[],
  iterator: (val: T, index?: number) => Promise<boolean>
): Promise<T | undefined> {
  if (!Array.isArray(array) || !array?.length) return undefined;
  for (let i = 0; i < array.length; i++) {
    const element = array.at(i) as T;
    const result = await iterator(element, i);
    if (result) {
      return element;
    }
  }
  return undefined;
}
