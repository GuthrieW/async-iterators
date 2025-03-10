export default async function reduceRight<T, V>(
  array: T[],
  iterator: (accumulator: V, currentValue: T) => Promise<V>,
  initialValue: V
): Promise<V> {
  if (!Array.isArray(array) || !array?.length) return initialValue;

  let result = initialValue;
  for (let index = array.length - 1; index >= 0; index--) {
    result = await iterator(result, array[index]);
  }

  return result;
}
