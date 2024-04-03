function getBooks (searchQuery) {
    return async(dispatch, getState) => {
        // let url = `http://localhost:4000/products`
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS", payload: { data }});
    }
}

function getBooksDetail (id) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_DETAIL_SUCCESS", payload: { data : data}});
    }
    
}

export const productAction={getBooks, getBooksDetail}