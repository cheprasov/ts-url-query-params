export declare const isURLQueryParamsInstance: (init: any) => init is URLQueryParams;
export default class URLQueryParams implements URLSearchParams {
    private readonly _urlSearchParams;
    [Symbol.iterator]: () => IterableIterator<[string, string]>;
    constructor(init?: string[][] | Record<string, string> | string | URLSearchParams | URLQueryParams);
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): IterableIterator<[string, string]>;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    keys(): IterableIterator<string>;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    values(): IterableIterator<string>;
    toObject(): Record<string, string>;
}
