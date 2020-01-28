export const type = 'findCurrentItem';

const findCurrentItem = (id:any) => {
    return {
        type,
        payload: id
    }
}

export default findCurrentItem