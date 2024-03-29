import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovie: null,
        addTrailer: null,
        popularMovie: null,
        topRatedMovie: null,
        UpComingMovie: null,
        searchMovie:null
    },
    reducers: {
        addMovie: (state, action) => {
            state.addNowPlayingMovie = action.payload
        },
        UpComingMovie: (state, action) => {
            state.UpComingMovie = action.payload
        },
        popularMovie: (state, action) => {
            state.popularMovie = action.payload
        },
        topRatedMovie: (state, action) => {
            state.topRatedMovie = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.addTrailer = action.payload
        },
        searchText:(state,action)=>{
            state.searchMovie=action.payload;
        }
    }
})


export const { addMovie, addMovieTrailer, popularMovie, topRatedMovie, UpComingMovie,searchText} = moviesSlice.actions;
export default moviesSlice.reducer;