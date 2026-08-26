import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo"))|| null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState, 
    reducers: {
      loginUsers: (state, action) => {
        state.userInfo = action.payload;
      },
      logoutUsers: (state) => {
        state.userInfo = null;
      }
    },
}
);
export const {loginUsers, logoutUsers} = userSlice.actions;


export default userSlice.reducer;