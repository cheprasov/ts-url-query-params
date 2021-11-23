[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

### `npm i @cheprasov/url-query-params`

# URLQueryParams

The **URLQueryParams** class defines utility methods to work with the query string of a URL. It is a good replacement for standard [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) class.

An object implementing URLQueryParams can directly be used in a `for...of` structure.

#### Why **URLQueryParams** is better than **URLSearchParams**?
- According to [WHATWG](https://url.spec.whatwg.org/#interface-urlsearchparams), **URLSearchParams** uses `application/x-www-form-urlencoded` format. While it's suitable for decoding URL queries, for encoding it can lead to unexpected results such as spaces being encoded as `+` and extra characters such as `~` being percent-encoded.
- **URLQueryParams** is based on **URLSearchParams** class and implements all methods of **URLSearchParams**, but it uses correct encoding format for all characters via **encodeURIComponentRFC3986** and conforms to newer [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) which defines more characters to escape, for example `*`.

### 1. How to install

```bash
> npm i @cheprasov/url-query-params
```

Import in **.js / .ts** file:
```javascript
import { URLQueryParams } from '@chepraspv/url-query-params';
```

### 2. Quick examples

```javascript
import { URLQueryParams } from '@chepraspv/url-query-params';

new URLQueryParams('foo=bar baz').toString(); // foo=bar%20baz

new URLQueryParams('a=1&b=2&c=3').toObject(); // { a: 1, b: 2, c: 3 }
```

### 3. Documentation

#### 3.1 Constructor
```typescript
// Returns a URLSearchParams object instance.
new URLQueryParams(init?: string[][] | Record<string, string> | string | URLSearchParams | URLQueryParams)
```

#### 3.2 Methods
```typescript
// Appends a specified key/value pair as a new search parameter. 
URLQueryParams.append(name: string, value: string): void 
```

```typescript
// Deletes the given search parameter, and its associated value, from the list of all search parameters.  
URLQueryParams.delete(name: string): void
```

```typescript
// Returns an iterator allowing iteration through all key/value pairs contained in this object.
URLQueryParams.entries(): IterableIterator<[string, string]>
```

```typescript
// Allows iteration through all values contained in this object via a callback function.
URLQueryParams.forEach(callbackfn: (value: string, key: string, parent: URLQueryParams) => void, thisArg?: any): void
```

```typescript
// Returns the first value associated with the given search parameter.
URLQueryParams.get(name: string): string | null
```

```typescript
// Returns all the values associated with a given search parameter.
URLQueryParams.getAll(name: string): string[]
```

```typescript
// Returns a boolean value indicating if such a given parameter exists.
URLQueryParams.has(name: string): boolean
```

```typescript
// Returns an iterator allowing iteration through all keys of the key/value pairs contained in this object.
URLQueryParams.keys(): IterableIterator<string>
```

```typescript
// Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.
URLQueryParams.set(name: string, value: string): void
```

```typescript
// Sorts all key/value pairs, if any, by their keys.
URLQueryParams.sort(): void
```

```typescript
// Returns new object created from key/values params.
URLQueryParams.toObject(): Record<string, string>
```

```typescript
// Returns a string containing a query string suitable for use in a URL.
URLQueryParams.toString(): string
```

```typescript
// Returns an iterator allowing iteration through all values of the key/value pairs contained in this object.
URLQueryParams.values(): IterableIterator<string>
```

## Something does not work

Feel free to fork project, fix bugs, write tests and finally request for pull
