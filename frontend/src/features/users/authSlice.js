import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userinfo: null,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState, 
    reducers: {
      createUser: (state, action) => {
        state.userinfo = action.payload;
      }
    },
}
);
export const {createUser} = userSlice.actions;


export default userSlice.reducer;