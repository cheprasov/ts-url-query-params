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

  describe('constructor', () => {
    it('should not be instance of URLSearchParams', () => {
      expect(new URLQueryParams()).not.toBeInstanceOf(URLSearchParams);
    });

    it('should allow to use URLSearchParams as init param', () => {
      expect(new URLQueryParams(new URLSearchParams('foo=bar&q=42')).toObject()).toEqual({ foo: 'bar', 'q': '42' });
    });

    it('should allow to use URLQueryParams as init param', () => {
      expect(new URLQueryParams(new URLQueryParams('foo=bar&q=42')).toObject()).toEqual({ foo: 'bar', 'q': '42' });
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

});