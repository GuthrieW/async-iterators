export default async function find<T>(
  array: T[],
  iterator: (value: T, index: number) => Promise<boolean>
): Promise<T | undefined> {
  if (!Array.isArray(array) || !array?.length) return undefined;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = await iterator(element, index);
    if (result) {
      return element;
    }
  }
  return undefined;
}
