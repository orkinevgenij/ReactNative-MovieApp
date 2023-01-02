import { configureStore } from "@reduxjs/toolkit";

import film from "../slices/filmsSlice";
import serial from "../slices/serialsSlice";
import topFilm from "../slices/topFilmsSlice";
import upcomingFilm from "../slices/upcomingFilmsSlice";
import favorites from "../slices/favoritesSlice";
import modal from "../slices/modalSlice";

export const store = configureStore({
    reducer: { film, serial, topFilm, upcomingFilm, favorites, modal }
})


