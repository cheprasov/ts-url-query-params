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
  });

});