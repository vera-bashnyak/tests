export default (text) => {
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
};