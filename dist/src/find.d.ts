export default function find<T>(array: T[], iterator: (value: T, index: number) => Promise<boolean>): Promise<T | undefined>;
