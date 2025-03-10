export default async function some<T>(
  array: T[],
  iterator: (value: T, index: number) => Promise<boolean>
): Promise<boolean> {
  if (!Array.isArray(array) || !array?.length) return false;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = await iterator(element, index);
    if (result) {
      return true;
    }
  }
  return false;
}
