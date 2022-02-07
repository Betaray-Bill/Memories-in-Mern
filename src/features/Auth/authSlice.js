import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.auth = action.payload
        },
        logout: (state) => {
            state.auth = null
        }
    }
})


export const { login, logout, } = authSlice.actions;

export const selectAuth = (state) => state.auth
    // export const updateSelector = (state) => currentId ? state.posts.find(p => p._id === currentId) : null 

export default authSlice.reducer;