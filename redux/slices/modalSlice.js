import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsActive(state, { payload }) {
            state.isActive = payload
        },
    },
});

export const { setIsActive } = modalSlice.actions
export default modalSlice.reducer