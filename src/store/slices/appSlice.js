import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
//import {RootState} from './store/store';
//import {User} from './types';

// Define a type for the slice state
type status = 'idle' | 'loading';

interface AppState {
  status: status;
  loggedIn: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
  status: 'idle',
  loggedIn: false,
};

/**
 * Get user details.
 */
export const getUserDetailsByID: any = createAsyncThunk(
  'user/details/id',
  async (data: {id: number; data: any}) => {
    const response = await ApiHelper.apiCall(
      'get',
      'user/' + data.id,
      data.data,
      true,
    );
    return response;
  },
);
/**
 * Get Logged user details.
 */
export const getUserMeDetails: any = createAsyncThunk(
  'user/details/me',
  async (data: {}) => {
    const response = await ApiHelper.apiCall('get', 'user/me', data, true);
    return response;
  },
);

// Slice
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    userLoggedOut: state => {
      // state.loggedIn = false;
      // state.loggedUser = undefined;
      // state.loggedUserDetails = undefined;
    },
    setUserLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
      // state.loggedUser = undefined;
      // state.loggedUserDetails = undefined;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {},
});

// Action creators are generated for each case reducer function
export const {userLoggedOut, setStatus, setUserLoggedIn} = appSlice.actions;

export default appSlice.reducer;

// Slice store data selector function
//export const getSplash = (state: RootState) => state.app.splash;
export const getStatus = (state: RootState) => state.app.status;
export const getLoginStatus = (state: RootState) => state.app.loggedIn;
