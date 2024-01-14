export type InitType = string[][] | Record<string, string> | string | URLSearchParams | URLQueryParams;
export declare const isURLQueryParamsInstance: (some: any) => some is URLQueryParams;
export default class URLQueryParams {
    private readonly _urlSearchParams;
    [Symbol.iterator]: () => IterableIterator<[string, string]>;
    constructor(init?: InitType);
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): IterableIterator<[string, string]>;
    forEach(callbackfn: (value: string, key: string, parent: URLQueryParams) => void, thisArg?: any): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    keys(): IterableIterator<string>;
    set(name: string, value: string): void;
    sort(): void;
    toObject(): Record<string, string | string[]>;
    toString(): string;
    values(): IterableIterator<string>;
}
