import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/apiSlice';

export default configureStore({
    reducer: {
        api: apiReducer
    }
});