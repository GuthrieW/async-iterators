export default function reduce<T, V>(array: T[], iterator: (accumulator: V, currentValue: T) => Promise<V>, initialValue: V): Promise<V>;
