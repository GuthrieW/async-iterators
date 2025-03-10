export default async function map<T, V>(
  array: T[],
  iterator: (value: T, index: number) => Promise<V>
): Promise<V[]> {
  if (!Array.isArray(array) || !array?.length) return [];

  const results: V[] = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    results.push(await iterator(element, index));
  }
  return results;
}
