import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {
  loggedIn: false,
};

// Slice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    userLoggedOut: state => {},
    setUserLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
  extraReducers: builder => {},
});

// Action creators are generated for each case reducer function
export const {userLoggedOut, setStatus, setUserLoggedIn} = appSlice.actions;

export default appSlice.reducer;

// Slice store data selector function

export const getLoginStatus = state => state.app.loggedIn;
