export default async function findLastIndex<T>(
  array: T[],
  iterator: (value: T, index: number) => Promise<boolean>
): Promise<number> {
  if (!Array.isArray(array) || !array?.length) return -1;

  for (let index = array.length; index >= 0; index--) {
    const element = array[index];
    const result = await iterator(element, index);
    if (result) {
      return index;
    }
  }

  return -1;
}
