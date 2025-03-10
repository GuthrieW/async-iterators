export default function findIndex<T>(array: T[], iterator: (value: T, index: number) => Promise<number>): Promise<number>;
