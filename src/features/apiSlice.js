// features/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'api/fetchData',
    async () => {
        const response = await fetch('https://api.publicapis.org/entries');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.entries;
    }
);

const initialState = {
    data: [],
    loading: false,
    error: null
};

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const selectData = (state) => state.api.data;
export const selectLoading = (state) => state.api.loading;
export const selectError = (state) => state.api.error;

export default apiSlice.reducer;