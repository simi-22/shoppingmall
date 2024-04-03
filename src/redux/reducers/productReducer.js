let initialState = {
    booksList:[],
    detail: null
}

function productReducer(state=initialState, action){
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS" :
            return {...state, booksList:payload.data};
        case 'GET_DETAIL_SUCCESS':
            return { ...state, detail:payload.data };
        default:
            return {...state}
    }
}

export default productReducer; 