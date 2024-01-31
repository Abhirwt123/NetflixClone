import { createSlice } from "@reduxjs/toolkit";

const FavMovie = createSlice({
    name: "FavMovie",
    initialState: {
        MoviesList: []
    },
    reducers: {
        addFavMovie: (state, action) => {
            state.MoviesList.push(action.payload)
        },
        removeFavMovie: (state, action) => {
            state.MoviesList.pop(action.payload)
        }
    }
})

export const { addFavMovie, removeFavMovie } = FavMovie.actions;
export default FavMovie.reducer;