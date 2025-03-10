export default async function findIndex<T>(
  array: T[],
  iterator: (value: T, index: number) => Promise<number>
): Promise<number> {
  if (!Array.isArray(array) || !array?.length) return -1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = await iterator(element, index);
    if (result) {
      return index;
    }
  }

  return -1;
}
