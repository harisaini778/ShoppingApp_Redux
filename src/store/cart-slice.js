import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: "cart",
    instialState: {
        items: [],
        totalQuantity: 0,
        totalPrice : 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItems = state.items.find(item => item.id === newItem.id);
            if (!existingItems) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name :newItem.title,
                });
            } else {
                existingItems.quantity = existingItems.quantity + 1;
                totalPrice = totalPrice + newItem.price;
            }
         },
        removeItemFromCart() {},
    }
})