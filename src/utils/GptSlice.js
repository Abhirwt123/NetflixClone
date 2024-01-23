import {createSlice} from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"GptSearch",
    initialState:{
        searchMovie:false
    },
    reducers:{
        searchMovie:(state,action)=>{
         state.searchMovie=!state.searchMovie;
        }
    }
});

export const {searchMovie}=GptSlice.actions;
export default GptSlice.reducer;