import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoritesItem: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoritesItem(state, { payload }) {
            const findItem = state.favoritesItem.find(obj => obj.id === payload.id)
            if (findItem) {
                return
            } else {
                state.favoritesItem.push(payload)
            }
        },
        deleteFavoritesItem(state, { payload }) {
            state.favoritesItem = state.favoritesItem.filter(obj => obj.id !== payload)
        }
    },


});

export const { addFavoritesItem, deleteFavoritesItem } = favoritesSlice.actions
export default favoritesSlice.reducer