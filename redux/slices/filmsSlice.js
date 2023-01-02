import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, URL } from "../../api";

const initialState = {
    films: [],
    status: 'loading' // loading | 'success' | 'error'

}
export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const { data } = await axios.get(
        `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return data.results;
})



const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.status = 'loading'
            state.films = []
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.status = 'success'
            state.films = action.payload
        })
        builder.addCase(fetchFilms.rejected, (state) => {
            state.status = 'error'
            state.films = [];

        })
    },


});



export const { } = filmsSlice.actions
export default filmsSlice.reducer