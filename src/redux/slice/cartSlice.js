import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQty:0,
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const product =action.payload;
          
                const price = product.sale_price ? product.sale_price : product.price;
                if (state.items.length) {
                    state.totalQty += 1;
                    state.totalPrice += price;
                    const tempProd = state.items.filter(e => e.id === product.id);
                    if (tempProd.length) {
                        state.items = state.items.map(e => {
                            if (e.id === product.id) {
                                e.cartQty += 1;
                            }
                            return e;
                        })
                    } else {
                        state.items.push({
                            ...product,
                            cartQty: 1
                        });
                    }
                } else {
                    state.items.push({
                        ...product,
                        cartQty: 1
                    });
                    state.totalQty = 1;
                    state.totalPrice = price;
                }
                console.log(state);
                return state;
            }
        },
        removeFromCart:(state,action)=>{
            
        },
        deleteProduct:(state,action)=>{},
        deleteCart:(state,action)=>{
            state={
                items:[],
                totalQty:0,
                totalPrice:0
        }
    }
    
})

export const {addToCart,removeFromCart,deleteProduct,deleteCart} =cartSlice.actions;

export default cartSlice;