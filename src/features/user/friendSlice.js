import { createSlice } from '@reduxjs/toolkit';

const friendSlice = createSlice({
  name: 'friend',
  initialState: { value: null },
  reducers: {
    track: (state, action) => {
      state.value = action.payload;
    },
    untrack: (state) => {
      state.value = null;
    },
  },
});

export const { track, untrack } = friendSlice.actions;
export const selectFriend = (state) => state.friend.value;
export default friendSlice.reducer;