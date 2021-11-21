import URLQueryParams, { isURLQueryParamsInstance } from './URLQueryParams';

const encodeByChar = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "\u0000": "%00",
  "\u0001": "%01",
  "\u0002": "%02",
  "\u0003": "%03",
  "\u0004": "%04",
  "\u0005": "%05",
  "\u0006": "%06",
  "\u0007": "%07",
  "\b": "%08",
  "\t": "%09",
  "\n": "%0A",
  "\u000b": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  "\u000e": "%0E",
  "\u000f": "%0F",
  "\u0010": "%10",
  "\u0011": "%11",
  "\u0012": "%12",
  "\u0013": "%13",
  "\u0014": "%14",
  "\u0015": "%15",
  "\u0016": "%16",
  "\u0017": "%17",
  "\u0018": "%18",
  "\u0019": "%19",
  "\u001a": "%1A",
  "\u001b": "%1B",
  "\u001c": "%1C",
  "\u001d": "%1D",
  "\u001e": "%1E",
  "\u001f": "%1F",
  " ": "%20",
  "!": "%21",
  "\"": "%22",
  "#": "%23",
  "$": "%24",
  "%": "%25",
  "&": "%26",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "*": "%2A",
  "+": "%2B",
  ",": "%2C",
  "-": "-",
  ".": ".",
  "/": "%2F",
  ":": "%3A",
  ";": "%3B",
  "<": "%3C",
  "=": "%3D",
  ">": "%3E",
  "?": "%3F",
  "@": "%40",
  "A": "A",
  "B": "B",
  "C": "C",
  "D": "D",
  "E": "E",
  "F": "F",
  "G": "G",
  "H": "H",
  "I": "I",
  "J": "J",
  "K": "K",
  "L": "L",
  "M": "M",
  "N": "N",
  "O": "O",
  "P": "P",
  "Q": "Q",
  "R": "R",
  "S": "S",
  "T": "T",
  "U": "U",
  "V": "V",
  "W": "W",
  "X": "X",
  "Y": "Y",
  "Z": "Z",
  "[": "%5B",
  "\\": "%5C",
  "]": "%5D",
  "^": "%5E",
  "_": "_",
  "`": "%60",
  "a": "a",
  "b": "b",
  "c": "c",
  "d": "d",
  "e": "e",
  "f": "f",
  "g": "g",
  "h": "h",
  "i": "i",
  "j": "j",
  "k": "k",
  "l": "l",
  "m": "m",
  "n": "n",
  "o": "o",
  "p": "p",
  "q": "q",
  "r": "r",
  "s": "s",
  "t": "t",
  "u": "u",
  "v": "v",
  "w": "w",
  "x": "x",
  "y": "y",
  "z": "z",
  "{": "%7B",
  "|": "%7C",
  "}": "%7D",
  "~": "~",
  "": "%7F",
  "": "%C2%80",
  "": "%C2%81",
  "": "%C2%82",
  "": "%C2%83",
  "": "%C2%84",
  "": "%C2%85",
  "": "%C2%86",
  "": "%C2%87",
  "": "%C2%88",
  "": "%C2%89",
  "": "%C2%8A",
  "": "%C2%8B",
  "": "%C2%8C",
  "": "%C2%8D",
  "": "%C2%8E",
  "": "%C2%8F",
  "": "%C2%90",
  "": "%C2%91",
  "": "%C2%92",
  "": "%C2%93",
  "": "%C2%94",
  "": "%C2%95",
  "": "%C2%96",
  "": "%C2%97",
  "": "%C2%98",
  "": "%C2%99",
  "": "%C2%9A",
  "": "%C2%9B",
  "": "%C2%9C",
  "": "%C2%9D",
  "": "%C2%9E",
  "": "%C2%9F",
  " ": "%C2%A0",
  "¡": "%C2%A1",
  "¢": "%C2%A2",
  "£": "%C2%A3",
  "¤": "%C2%A4",
  "¥": "%C2%A5",
  "¦": "%C2%A6",
  "§": "%C2%A7",
  "¨": "%C2%A8",
  "©": "%C2%A9",
  "ª": "%C2%AA",
  "«": "%C2%AB",
  "¬": "%C2%AC",
  "­": "%C2%AD",
  "®": "%C2%AE",
  "¯": "%C2%AF",
  "°": "%C2%B0",
  "±": "%C2%B1",
  "²": "%C2%B2",
  "³": "%C2%B3",
  "´": "%C2%B4",
  "µ": "%C2%B5",
  "¶": "%C2%B6",
  "·": "%C2%B7",
  "¸": "%C2%B8",
  "¹": "%C2%B9",
  "º": "%C2%BA",
  "»": "%C2%BB",
  "¼": "%C2%BC",
  "½": "%C2%BD",
  "¾": "%C2%BE",
  "¿": "%C2%BF",
  "À": "%C3%80",
  "Á": "%C3%81",
  "Â": "%C3%82",
  "Ã": "%C3%83",
  "Ä": "%C3%84",
  "Å": "%C3%85",
  "Æ": "%C3%86",
  "Ç": "%C3%87",
  "È": "%C3%88",
  "É": "%C3%89",
  "Ê": "%C3%8A",
  "Ë": "%C3%8B",
  "Ì": "%C3%8C",
  "Í": "%C3%8D",
  "Î": "%C3%8E",
  "Ï": "%C3%8F",
  "Ð": "%C3%90",
  "Ñ": "%C3%91",
  "Ò": "%C3%92",
  "Ó": "%C3%93",
  "Ô": "%C3%94",
  "Õ": "%C3%95",
  "Ö": "%C3%96",
  "×": "%C3%97",
  "Ø": "%C3%98",
  "Ù": "%C3%99",
  "Ú": "%C3%9A",
  "Û": "%C3%9B",
  "Ü": "%C3%9C",
  "Ý": "%C3%9D",
  "Þ": "%C3%9E",
  "ß": "%C3%9F",
  "à": "%C3%A0",
  "á": "%C3%A1",
  "â": "%C3%A2",
  "ã": "%C3%A3",
  "ä": "%C3%A4",
  "å": "%C3%A5",
  "æ": "%C3%A6",
  "ç": "%C3%A7",
  "è": "%C3%A8",
  "é": "%C3%A9",
  "ê": "%C3%AA",
  "ë": "%C3%AB",
  "ì": "%C3%AC",
  "í": "%C3%AD",
  "î": "%C3%AE",
  "ï": "%C3%AF",
  "ð": "%C3%B0",
  "ñ": "%C3%B1",
  "ò": "%C3%B2",
  "ó": "%C3%B3",
  "ô": "%C3%B4",
  "õ": "%C3%B5",
  "ö": "%C3%B6",
  "÷": "%C3%B7",
  "ø": "%C3%B8",
  "ù": "%C3%B9",
  "ú": "%C3%BA",
  "û": "%C3%BB",
  "ü": "%C3%BC",
  "ý": "%C3%BD",
  "þ": "%C3%BE",
  "ÿ": "%C3%BF",
} as Readonly<Record<string, string>>;

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

    it('should decode `+` as space character', () => {
      expect(new URLQueryParams('q=s+p+a+c+e+s').toObject()).toEqual({ q: 's p a c e s'});
    });

    it('should decode characters', () => {
      for (const char in encodeByChar) {
        if (!encodeByChar.hasOwnProperty(char)) {
          continue;
        }
        const encodedChar = encodeByChar[char];
        urlQueryParams = new URLQueryParams(`test=${encodedChar}`);
        expect(urlQueryParams.get('test')).toEqual(char);
      }
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

  describe('get', () => {
    it('should return value by key', () => {
      expect(urlQueryParams.get('foo')).toEqual('bar');
      expect(urlQueryParams.get('q')).toEqual('42');
      expect(urlQueryParams.get('empty')).toEqual('');
    });

    it('should return first value for key', () => {
      urlQueryParams.append('foo', 'baz');
      expect(urlQueryParams.get('foo')).toEqual('bar');
    });

    it('should return null if key is not exist', () => {
      expect(urlQueryParams.get('bad')).toBeNull();
    });
  });

  describe('getAll', () => {
    it('should return values by key', () => {
      expect(urlQueryParams.getAll('foo')).toEqual(['bar']);
      expect(urlQueryParams.getAll('q')).toEqual(['42']);
      expect(urlQueryParams.getAll('empty')).toEqual(['']);
    });

    it('should return all values for key', () => {
      urlQueryParams.append('foo', 'baz');
      expect(urlQueryParams.getAll('foo')).toEqual(['bar', 'baz']);
    });

    it('should return empty list if key is not exist', () => {
      expect(urlQueryParams.getAll('bad')).toEqual([]);
    });
  });

  describe('has', () => {
    it('should return true if key is exist', () => {
      expect(urlQueryParams.has('foo')).toBeTruthy();
      expect(urlQueryParams.has('q')).toBeTruthy();
      expect(urlQueryParams.has('empty')).toBeTruthy();
    });

    it('should return false if key is not exist', () => {
      expect(urlQueryParams.has('bad')).toBeFalsy();
    });
  });

  describe('keys', () => {
    it('should return iterator for keys', () => {
      const keys = urlQueryParams.keys();
      expect(typeof keys[Symbol.iterator]).toEqual('function');
      expect(keys.next()).toEqual({ done: false, value: 'foo' });
      expect(keys.next()).toEqual({ done: false, value: 'q' });
      expect(keys.next()).toEqual({ done: false, value: 'empty' });
      expect(keys.next()).toEqual({ done: true, value: undefined });
    });
  });

  describe('set', () => {
    it('should set new params', () => {
      urlQueryParams.set('test', 'passed');
      expect(urlQueryParams.getAll('test')).toEqual(['passed']);
    });

    it('should replace param with same key', () => {
      urlQueryParams.set('test', 'passed');
      urlQueryParams.set('test', 'ok');
      expect(urlQueryParams.getAll('test')).toEqual(['ok']);
    });
  });

  describe('sort', () => {
    it('should sort key/value params', () => {
      urlQueryParams.sort();
      expect(urlQueryParams.toString()).toEqual('empty=&foo=bar&q=42');
      const keys = urlQueryParams.keys();
      expect(keys.next()).toEqual({ done: false, value: 'empty' });
      expect(keys.next()).toEqual({ done: false, value: 'foo' });
      expect(keys.next()).toEqual({ done: false, value: 'q' });
      expect(keys.next()).toEqual({ done: true, value: undefined });
    });
  });

  describe('toObject', () => {
    it('should key/value object of the params', () => {
      expect(urlQueryParams.toObject()).toEqual({ foo: 'bar', q: '42', empty: '' });
    });

    it('should return a new object of params', () => {
      expect(urlQueryParams.toObject()).not.toBe(urlQueryParams.toObject());
    });
  });

  describe('toString', () => {
    it('encode params to string', () => {
      expect(urlQueryParams.toString()).toEqual('foo=bar&q=42&empty=');
    });

    it('should encode reserved characters for keys & values', () => {
      expect(new URLQueryParams({ 'key;,/?:@&=+$': 'foo', bar: 'value;,/?:@&=+$' }).toString())
          .toEqual('key%3B%2C%2F%3F%3A%40%26%3D%2B%24=foo&bar=value%3B%2C%2F%3F%3A%40%26%3D%2B%24');
    });

    it('should encode number sign for keys & values', () => {
      expect(new URLQueryParams({ 'key#': 'foo', bar: 'value#' }).toString())
          .toEqual('key%23=foo&bar=value%23');
    });

    it('should encode additionals characters of RFC 3986 for keys & values', () => {
      expect(new URLQueryParams({ 'key with space': 'foo', bar: 'value with space' }).toString())
          .toEqual('key%20with%20space=foo&bar=value%20with%20space');
    });

    it('should encode characters', () => {
      urlQueryParams = new URLQueryParams();
      for (const char in encodeByChar) {
        if (!encodeByChar.hasOwnProperty(char)) {
          continue;
        }
        const encodedChar = encodeByChar[char];
        urlQueryParams.set('test', char);
        expect(urlQueryParams.toString()).toEqual(`test=${encodedChar}`);
      }
    });
  });

  describe('values', () => {
    it('should return iterator for values', () => {
      const values = urlQueryParams.values();
      expect(typeof values[Symbol.iterator]).toEqual('function');
      expect(values.next()).toEqual({ done: false, value: 'bar' });
      expect(values.next()).toEqual({ done: false, value: '42' });
      expect(values.next()).toEqual({ done: false, value: '' });
      expect(values.next()).toEqual({ done: true, value: undefined });
    });
  });

});