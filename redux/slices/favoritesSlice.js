import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoritesItem: [],
}

const favoritesSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCartItem(state, { payload }) {
            const findItem = state.favoritesItem.find(obj => obj.id === payload.id)
            if (findItem) {
                return
            } else {
                state.favoritesItem.push(payload)
            }
        },
        deleteCartItem(state, { payload }) {
            state.favoritesItem = state.favoritesItem.filter(obj => obj.id !== payload)
        }
    },


});

export const { addCartItem, deleteCartItem } = favoritesSlice.actions
export default favoritesSlice.reducer