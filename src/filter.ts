export default async function filter<T>(
  array: T[],
  iterator: (value: T, index: number) => Promise<boolean>
): Promise<T[]> {
  if (!Array.isArray(array) || !array?.length) return [];

  const results: T[] = [];
  for (let index = 0; index < array.length; index++) {
    const element = array.at(index) as T;
    const result = await iterator(element, index);
    if (result) {
      results.push(element);
    }
  }
  return results;
}
