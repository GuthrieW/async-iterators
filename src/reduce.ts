export default async function reduce<T, V>(
  array: T[],
  iterator: (accumulator: V, currentValue: T) => Promise<V>,
  initialValue: V
): Promise<V> {
  if (!Array.isArray(array) || !array?.length) return initialValue;

  let result = initialValue;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result = await iterator(result, element);
  }

  return result;
}
