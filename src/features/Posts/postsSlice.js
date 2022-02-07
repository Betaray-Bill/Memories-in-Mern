import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        FETCH_ALL: (state, action) => {
            state.posts = action.payload
        },
        CREATE: (state, action) => {
            state.posts += action.payload
        },
        UPDATE: (state, action) => {
            state.posts.map((post) => (
                post.id === action.payload._id ? action.payload  : post
            ))
        },
        DELETE:(state, action) => {
             return state.posts.filter(p => p._id === action.payload)
        },
        LIKE: (state, action) => {
            return state.posts.filter(p => p._id === action.payload ? action.payload._id : p)
        }
    }
})


export const { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts
// export const updateSelector = (state) => currentId ? state.posts.find(p => p._id === currentId) : null 

export default postsSlice.reducer;