import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, URL } from "../../api";

const initialState = {
    upcomingFilms: [],
    status: 'loading' // loading | 'success' | 'error'

}
export const fetchUpcomingFilms = createAsyncThunk('films/fetchUpcomingFilms', async () => {
    const { data } = await axios.get(
        `${URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    return data.results;
})



const upcomingFilmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUpcomingFilms.pending, (state) => {
            state.status = 'loading'
            state.upcomingFilms = []
        })
        builder.addCase(fetchUpcomingFilms.fulfilled, (state, action) => {
            state.status = 'success'
            state.upcomingFilms = action.payload
        })
        builder.addCase(fetchUpcomingFilms.rejected, (state) => {
            state.status = 'error'
            state.upcomingFilms = [];

        })
    },


});



export const { } = upcomingFilmsSlice.actions
export default upcomingFilmsSlice.reducer