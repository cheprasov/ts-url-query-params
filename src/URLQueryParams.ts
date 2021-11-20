
export type InitType = string[][] | Record<string, string> | string | URLSearchParams | URLQueryParams;

export const isURLQueryParamsInstance = (init: any): init is URLQueryParams  => {
  return init instanceof URLQueryParams;
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

  append(name: string, value: string) {
    return this._urlSearchParams.append(name, value);
  }

  // todo: appendMulti(init: InitType) {}

  delete(name: string) {
    return this._urlSearchParams.delete(name);
  }

  // todo: deleteMulti(names: string[]) {}

  entries() {
    return this._urlSearchParams.entries();
  }

  forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any) {
    return this._urlSearchParams.forEach(callbackfn, thisArg);
  }

  get(name: string) {
    return this._urlSearchParams.get(name);
  }

  getAll(name: string) {
    return this._urlSearchParams.getAll(name);
  }

  has(name: string) {
    return this._urlSearchParams.has(name);
  }

  keys() {
    return this._urlSearchParams.keys();
  }

  set(name: string, value: string) {
    return this._urlSearchParams.set(name, value);
  }

  sort() {
    return this._urlSearchParams.sort();
  }

  toString(): string {
    const params: string[] = [];
    this.forEach((value, key) => {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });
    return params.join('&');
  }

  values() {
    return this._urlSearchParams.values();
  }

  toObject(): Record<string, string> {
    const obj: Record<string, string> = {};
    this.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

}
