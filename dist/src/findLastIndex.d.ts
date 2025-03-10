export default function findLastIndex<T>(array: T[], iterator: (value: T, index: number) => Promise<boolean>): Promise<number>;
