import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
      changeName: (state, action) => {
        const userInput = action.payload
        return userInput
      }
        
    }
})

export const { changeName } = userNameSlice.actions;

export default userNameSlice.reducer;