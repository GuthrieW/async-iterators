export default function some<T>(array: T[], iterator: (value: T, index: number) => Promise<boolean>): Promise<boolean>;
