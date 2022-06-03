import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const getToken = () => {
  return Cookie.get('token');
};

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: null,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { logout, userLogin } = userSlice.actions;
export default userSlice.reducer;
