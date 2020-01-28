export const type = 'findResults';

const findResults = (text:string) => {
    return {
        type,
        payload: text
    }
}

export default findResults