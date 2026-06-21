import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";


const initialState = {
    sideBar: {
        type: "CONTACT",
        open: false
    }
}


const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.sideBar.open = !state.sideBar.open;
        },
    }
})