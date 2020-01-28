export const type = 'findSuggestions';

const findSuggestions = (text:string) => {
    console.log(text);
    return {
        type,
        payload: text
    }
}

export default findSuggestions