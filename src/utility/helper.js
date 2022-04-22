export const isHttpSuccess = (status) => {
    if (status >= 200 && status <= 299) {
        return true;
    } 
        return false;
}

export const htmlEntityDecoder = (stringToDecode) => {
    const parser = new DOMParser()
    const decodedString = parser.parseFromString(stringToDecode, "text/html");
    return decodedString.documentElement.textContent;
}