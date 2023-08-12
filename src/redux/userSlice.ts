import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {JSON_SERVER_URL} from '../utils/constants';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  console.log('fetch user api called');
  let res = await fetch(`${JSON_SERVER_URL}/users`);
  res = await res.json();
  return res;
});

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.length = 0;
      state.push(action.payload);
    });
  },
});

// export const {fetchUsers} = ;
export default userSlice.reducer;
