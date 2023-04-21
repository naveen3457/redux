import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        value:[],
        error:null,
        status:"pending"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status= "pending";
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status= "fulfilled";
            state.error = null;
            state.value = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status= "rejected";
            state.error = action.payload
        })
    }
})

const fetchProducts = createAsyncThunk("/fetchProducts",async ()=>{
const url = "https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish";

    try {
        const {data} =await axios.get(url);
        return data.data;
    } catch (error) {
        return error;
    }
})

export default productSlice;