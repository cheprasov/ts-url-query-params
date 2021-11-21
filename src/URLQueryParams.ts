import encodeURIComponentRFC3986 from './encodeURIComponentRFC3986';

export type InitType = string[][] | Record<string, string> | string | URLSearchParams | URLQueryParams;

export const isURLQueryParamsInstance = (some: any): some is URLQueryParams  => {
  return some instanceof URLQueryParams;
}

export default class URLQueryParams implements URLSearchParams {
  
  private readonly _urlSearchParams: URLSearchParams;
  [Symbol.iterator]: () => IterableIterator<[string, string]>
  
  constructor(init?: InitType) {
    this._urlSearchParams = new URLSearchParams(
        isURLQueryParamsInstance(init) ? init._urlSearchParams : init,
    );
    this[Symbol.iterator] = this._urlSearchParams[Symbol.iterator].bind(this._urlSearchParams);
  }

  append(name: string, value: string): void {
    return this._urlSearchParams.append(name, value);
  }

  // todo: appendMulti(init: InitType) {}

  delete(name: string): void {
    return this._urlSearchParams.delete(name);
  }

  // todo: deleteMulti(names: string[]) {}

  entries(): IterableIterator<[string, string]> {
    return this._urlSearchParams.entries();
  }

  forEach(callbackfn: (value: string, key: string, parent: URLQueryParams) => void, thisArg?: any): void {
    const self = this;
    const callback = thisArg ? callbackfn.bind(thisArg) : callbackfn;
    return this._urlSearchParams.forEach(function (value, key) {
      return callback(value, key, self);
    });
  }

  get(name: string): string | null {
    return this._urlSearchParams.get(name);
  }

  getAll(name: string): string[] {
    return this._urlSearchParams.getAll(name);
  }

  has(name: string): boolean {
    return this._urlSearchParams.has(name);
  }

  keys(): IterableIterator<string> {
    return this._urlSearchParams.keys();
  }

  set(name: string, value: string): void {
    return this._urlSearchParams.set(name, value);
  }

  // todo: setMulti(init: InitType) {}

  sort(): void {
    return this._urlSearchParams.sort();
  }

  toObject(): Record<string, string> {
    const obj: Record<string, string> = {};
    this.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  toString(): string {
    const params: string[] = [];
    this.forEach((value, key) => {
      params.push(`${encodeURIComponentRFC3986(key)}=${encodeURIComponentRFC3986(value)}`);
    });
    return params.join('&');
  }

  values(): IterableIterator<string> {
    return this._urlSearchParams.values();
  }

}
