import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo"))|| null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState, 
    reducers: {
      loginUsers: (state, action) => {
        state.userinfo = action.payload;
      },
      logoutUsers: (state) => {
        state.userinfo = null;
      }
    },
}
);
export const {loginUsers, logoutUsers} = userSlice.actions;


export default userSlice.reducer;