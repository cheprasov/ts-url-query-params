import encodeURIComponentRFC3986 from './encodeURIComponentRFC3986';

describe('encodeURIComponentRFC3986', () => {
    it('should decode characters', () => {
        expect(encodeURIComponentRFC3986("for bar 42 ;,/?:@&=+$ -_.!~*'() #")).toEqual(
            'for%20bar%2042%20%3B%2C%2F%3F%3A%40%26%3D%2B%24%20-_.%21~%2A%27%28%29%20%23'
        );
    });
});
