import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import { authApiEndpoints } from '../api';

export type AuthState = {
  data: TypeUser | null
};

export const initialState: AuthState = {
  data: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiEndpoints.endpoints.signInWitOauthYa.matchFulfilled,
        (state, action) => ({ ...state, data: action.payload }),
      )
      .addMatcher(
        authApiEndpoints.endpoints.signInWitOauthYa.matchRejected,
        (state, action) => console.log('rejected', action),
      )
      .addMatcher(
        authApiEndpoints.endpoints.signInWitOauthGithub.matchFulfilled,
        (state, action) => ({ ...state, data: action.payload }),
      )
      .addMatcher(
        authApiEndpoints.endpoints.signInWitOauthGithub.matchRejected,
        (state, action) => console.log('rejected', action),
      )
      // .addMatcher(
      //   userApiEndpoints.endpoints.getUserMe.matchFulfilled,
      //   (state, action) => ({ ...state, data: action.payload }),
      // )
      // .addMatcher(
      //   userApiEndpoints.endpoints.getUserMe.matchRejected,
      //   (state, action) => console.log('rejected', action),
      // )
      // .addMatcher(
      //   userApiEndpoints.endpoints.getIam.matchFulfilled,
      //   (state, action) => ({ ...state, data: action.payload }),
      // )
      // .addMatcher(
      //   userApiEndpoints.endpoints.getIam.matchRejected,
      //   (state, action) => console.log('rejected', action),
      // )
      // .addMatcher(
      //   userApiEndpoints.endpoints.updateUser.matchFulfilled,
      //   (state, action) => ({ ...state, data: action.payload }),
      // )
      // .addMatcher(
      //   userApiEndpoints.endpoints.updateUser.matchRejected,
      //   (state, action) => console.log('rejected', action),
      // )
      .addMatcher(
        authApiEndpoints.endpoints.signOut.matchFulfilled,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (state, action) => ({ ...state, data: null }),
      )
      .addMatcher(
        authApiEndpoints.endpoints.signOut.matchRejected,
        (state, action) => console.log('rejected', action),
      );
  },
});

export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.user.data;
