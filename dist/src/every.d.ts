export default function every<T>(array: T[], iterator: (value: T, index: number) => Promise<boolean>): Promise<boolean>;
