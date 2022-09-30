import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'loader',
    initialState: false,
    reducers: {
        setLoader: (state, action) => {
            const loader = action.payload
            return loader
        }

    }
})

export const { setLoader } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
