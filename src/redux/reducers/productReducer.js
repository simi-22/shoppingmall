let initialState = {
    booksList:[]
}

function productReducer(state=initialState, action){
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS" :
            return {...state, booksList:payload.data};
        default:
            return {...state}
    }
}

export default productReducer; 