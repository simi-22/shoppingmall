import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { productAction } from "../actions/productAction";




let initialState = {
    booksList:[],
    detail: null,
    isLoading: false,
    error: null
}

// function productReducer(state=initialState, action){
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS" :
//             return {...state, booksList:payload.data};
//         case 'GET_DETAIL_SUCCESS':
//             return { ...state, detail:payload.data };
//         default:
//             return {...state}
//     }
// }

// export default productReducer; 

export const fetchBooks = createAsyncThunk('product/fetchAll',async(searchQuery, thunkApi) => {
    try{
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
    
})
export const fetchBooksDetail = createAsyncThunk('product/fetchDetail',async(id, thunkApi) => {
    try{
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products/${id}`
        let response = await fetch(url);
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message)
    }
    
})

const productSlice = createSlice({
    name:'product', 
    initialState,
    reducers : { 
        getDetailBooks(state, action){
            state.detail = action.payload.data;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending,(state) => {
            state.isLoading = true
        })
        .addCase(fetchBooks.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.booksList = action.payload
        })
        .addCase(fetchBooks.rejected, (state, action )=> {
            state.isLoading = false;
            state.error=action.payload
        })
        .addCase(fetchBooksDetail.pending,(state) => {
            state.isLoading = true
        })
        .addCase(fetchBooksDetail.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.detail = action.payload
        })
        .addCase(fetchBooksDetail.rejected, (state, action )=> {
            state.isLoading = false;
            state.error=action.payload
        })
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer; 
 