import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
            const response = await axios.get("http://localhost:5000/products");
            console.log("response",response);
            return response?.data;
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending] : (state, action) => {
            console.log("pending",state, action);
            state.status = "pending";
        },
        [productsFetch.fulfilled] : (state, action) => {
            console.log("success",state, action);
            state.status = "success";
            state.items = action.payload;
        },
        [productsFetch.rejected] : (state, action) => {
            state.status = "rejected";
        }
    }
    
});
// console.log(typeof productsFetch.pending);
console.log(productsSlice);
export default productsSlice.reducer;