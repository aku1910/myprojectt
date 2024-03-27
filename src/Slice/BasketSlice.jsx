import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name: "basket",
    initialState: {
        items: JSON.parse(localStorage.getItem("basket")) || [],
        total: 0,
        image: ""
    },
    reducers: {
        addBasket: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.Id === action.payload.Id);
            if (existingIndex >= 0) {
                state.items[existingIndex].count += 1;
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem("basket", JSON.stringify(state.items));
            state.total = state.items.reduce((Price, item) => Price += item.Price * item.count, 0);
            state.image = action.payload.image; 
        },
        changeCount: (state, action) => {
            const existingIndex = state.items.findIndex(product => product.Id === action.payload.Id);
            if (existingIndex >= 0 && state.items[existingIndex].count > 1) {
                state.items[existingIndex].count -= 1;
                localStorage.setItem("basket", JSON.stringify(state.items));
                state.total = state.items.reduce((Price, item) => Price += item.Price * item.count, 0);
            }
        },
        removeBasket: (state, action) => {
            state.items = state.items.filter(product => product.Id !== action.payload);
            localStorage.setItem("basket", JSON.stringify(state.items));
            state.total = state.items.reduce((Price, item) => Price += item.Price * item.count, 0);
        },
    }
});

export const { addBasket, changeCount, removeBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
