

export default class URLQueryParams {
  
  private _urlSearchParams: URLSearchParamsInf;
  
  constructor(init) {
    this._urlSearchParams = URLSearchParamsFactory.create(init);
  }

  append(...args) {
    return this._urlSearchParams.append(...args);
  }

  delete(...args) {
    return this._urlSearchParams.delete(...args);
  }

  entries(...args) {
    return this._urlSearchParams.entries(...args);
  }

  forEach(...args) {
    return this._urlSearchParams.forEach(...args);
  }

  get(...args) {
    return this._urlSearchParams.get(...args);
  }

  getAll(...args) {
    return this._urlSearchParams.getAll(...args);
  }

  has(...args) {
    return this._urlSearchParams.has(...args);
  }

  keys(...args) {
    return this._urlSearchParams.keys(...args);
  }

  set(...args) {
    return this._urlSearchParams.set(...args);
  }

  sort(...args) {
    return this._urlSearchParams.sort(...args);
  }

  toString(...args) {
    return this._urlSearchParams.toString(...args);
  }

  values(...args) {
    return this._urlSearchParams.values(...args);
  }
