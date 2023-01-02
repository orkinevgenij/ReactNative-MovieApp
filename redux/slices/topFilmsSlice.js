import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, URL } from "../../api";

const initialState = {
    topFilms: [],
    status: 'loading' // loading | 'success' | 'error'

}
export const fetchTopFilms = createAsyncThunk('films/fetchTopFilms', async () => {
    const { data } = await axios.get(
        `${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return data.results;
})



const topFilmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTopFilms.pending, (state) => {
            state.status = 'loading'
            state.topFilms = []
        })
        builder.addCase(fetchTopFilms.fulfilled, (state, action) => {
            state.status = 'success'
            state.topFilms = action.payload
        })
        builder.addCase(fetchTopFilms.rejected, (state) => {
            state.status = 'error'
            state.topFilms = [];

        })
    },


});



export const { } = topFilmsSlice.actions
export default topFilmsSlice.reducer