import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "supportedlang",
    initialState: {
        Lang: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.Lang = action.payload;
        }

    }
})
export const {changeLang}=appConfigSlice.actions;
export default appConfigSlice.reducer;