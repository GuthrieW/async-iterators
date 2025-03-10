export default async function reduce<T, V>(
  array: T[],
  iterator: (accumulator: V, currentValue: T) => Promise<V>,
  initialValue: V
): Promise<V> {
  if (!Array.isArray(array) || !array?.length) return initialValue;

  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = await iterator(result, array.at(i) as T);
  }

  return result;
}
