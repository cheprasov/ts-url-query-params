import URLQueryParams, { isURLQueryParamsInstance } from './URLQueryParams';

describe('isURLQueryParamsInstance', () => {
  it('should return true for instances of URLQueryParams', () => {
    expect(new URLQueryParams()).toBeInstanceOf(URLQueryParams);
  });

  it('should return false for not instances of URLQueryParams', () => {
    expect(new URLSearchParams()).not.toBeInstanceOf(URLQueryParams);
    expect(new Date()).not.toBeInstanceOf(URLQueryParams);
    expect(null).not.toBeInstanceOf(URLQueryParams);
  })
});

describe('URLQueryParams', () => {
  let urlQueryParams: URLQueryParams;

  beforeEach(() => {
    urlQueryParams = new URLQueryParams('foo=bar&q=42&empty=&');
    expect(urlQueryParams.toObject()).toEqual({ foo: 'bar', 'q': '42', empty: '' });
  });

  describe('constructor', () => {
    it('should not be instance of URLSearchParams', () => {
      expect(urlQueryParams).not.toBeInstanceOf(URLSearchParams);
    });

    it('should allow to use URLSearchParams as init param', () => {
      expect(new URLQueryParams(new URLSearchParams('foo=bar&q=42')).toObject()).toEqual({ foo: 'bar', 'q': '42'});
    });

    it('should allow to use URLQueryParams as init param', () => {
      expect(new URLQueryParams(urlQueryParams).toObject()).toEqual({ foo: 'bar', 'q': '42', empty: '' });
    });

    it('should allow to use an object as init param', () => {
      expect(new URLQueryParams({ foo: 'bar', 'q': '42' }).toObject()).toEqual({ foo: 'bar', 'q': '42' });
    });

    it('should allow to use array of strings as init param', () => {
      expect(new URLQueryParams([['foo', 'bar'], ['q', '42']]).toObject()).toEqual({ foo: 'bar', 'q': '42' });
    });

    it('should allow to use string as init param', () => {
      expect(new URLQueryParams('foo=bar&q=42').toObject()).toEqual({ foo: 'bar', 'q': '42' });
    });

    it('should allow to use constructor without params', () => {
      expect(new URLQueryParams().toObject()).toEqual({});
    });
  });

  describe('<IterableIterator>', () => {
    it('should be iterable', () => {
      const obj: Record<string, string> = {};
      for (const [ key, value ] of urlQueryParams) {
        obj[key] = value;
      }
      expect(urlQueryParams.toObject()).toEqual(obj);
    });
  });

  describe('append', () => {
    it('should append new params', () => {
      urlQueryParams.append('test', 'passed');
      expect(urlQueryParams.getAll('test')).toEqual(['passed']);
    });

    it('should append param with same key', () => {
      urlQueryParams.append('test', 'passed');
      urlQueryParams.append('test', 'ok');
      expect(urlQueryParams.getAll('test')).toEqual(['passed', 'ok']);
    });
  });

  describe('delete', () => {
    it('should delete param by key', () => {
      urlQueryParams.delete('foo');
      expect(urlQueryParams.has('foo')).toBeFalsy();
    });
  });

  describe('entries', () => {
    it('should return params as entries', () => {
      const entries = urlQueryParams.entries();
      expect(typeof entries[Symbol.iterator]).toEqual('function');
      expect(entries.next()).toEqual({ done: false, value: ['foo', 'bar'] });
      expect(entries.next()).toEqual({ done: false, value: ['q', '42'] });
      expect(entries.next()).toEqual({ done: false, value: ['empty', ''] });
      expect(entries.next()).toEqual({ done: true, value: undefined });
    });
  });

  describe('forEach', () => {
    it('should iterate over items', () => {
      const obj: Record<string, string> = {};
      urlQueryParams.forEach((value, key, parent) => {
        expect(parent).toBe(urlQueryParams);
        obj[key] = value;
      });
      expect(obj).toEqual(urlQueryParams.toObject());
    });

    it('should user thisArg right', () => {
      const obj: Record<string, string> = {};
      urlQueryParams.forEach(function (value, key, parent) {
        // @ts-ignore
        this[key] = value;
      }, obj);
      expect(obj).toEqual(urlQueryParams.toObject());
    });
  });

});