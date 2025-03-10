export type BooleanIterator<T> = (value: T, index: number) => Promise<boolean>;

export type ArrayIterator<T, V> = (value: T, index: number) => Promise<V>;
