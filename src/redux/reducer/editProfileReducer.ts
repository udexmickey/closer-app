import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { toggleEditProfile } from '../action/editProfileActions';

interface EditProfileState {
  isEnabled: boolean;
}

const initialState: EditProfileState = {
  isEnabled: false,
};

export const editProfileReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleEditProfile, (state, action: PayloadAction<boolean>) => {
    return {
      ...state,
      isEnabled: action.payload,
    };
  });
});
