export default function map<T, V>(array: T[], iterator: (value: T, index: number) => Promise<V>): Promise<V[]>;
