const defaultState: any[] = [
    {
        id:1,
        title: 'React'
    },
    {
        id:2,
        title: 'Apple'
    }
]

function reducer( state = defaultState, { type, payload}: any ){
    switch (type){
        case 'findSuggestions':{
            return [123]
        }
        default:
            return state
    }
}

export default reducer