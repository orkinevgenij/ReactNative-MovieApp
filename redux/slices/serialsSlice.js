import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, URL } from "../../api";

const initialState = {
    serials: [],
    status: 'loading' // loading | 'success' | 'error'

}
export const fetchSerials = createAsyncThunk('serials/fetchSerials', async () => {
    const { data } = await axios.get(
        `${URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return data.results;
})



const serialSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSerials.pending, (state) => {
            state.status = 'loading'
            state.serials = []
        })
        builder.addCase(fetchSerials.fulfilled, (state, action) => {
            state.status = 'success'
            state.serials = action.payload
        })
        builder.addCase(fetchSerials.rejected, (state) => {
            state.status = 'error'
            state.serials = [];

        })
    },


});

export const { } = serialSlice.actions
export default serialSlice.reducer