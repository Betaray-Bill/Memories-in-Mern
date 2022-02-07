import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import postsReducer from '../features/Posts/postsSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
    },
});