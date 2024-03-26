import { createReducer } from '@reduxjs/toolkit';
import { IUser, setCurrentUser } from '../action/currentUserDetailsActions';

interface CurrentUserState {
  user: IUser | null;
}

const initialState: CurrentUserState = {
  user: null,
};

export const currentUserDetailsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCurrentUser, (state, action) => {
    state.user = action.payload;
  });
});
