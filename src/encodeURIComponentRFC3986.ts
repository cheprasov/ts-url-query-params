
const replacer = (char: string) => {
    return '%' + char.charCodeAt(0).toString(16).toUpperCase();
};

const regExp = /[!'()*]/g;

export default function encodeURIComponentRFC3986(str: string) {
    return encodeURIComponent(str).replace(regExp, replacer);
}