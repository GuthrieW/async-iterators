export default function filter<T>(array: T[], iterator: (value: T, index: number) => Promise<boolean>): Promise<T[]>;
