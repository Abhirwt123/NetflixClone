import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice"
import gptReducer from "./GptSlice";
import langReducer from "./appConfigSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        Gpt:gptReducer,
        supportedlang:langReducer
    }
});
export default appStore;