import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { toggleNotifications } from '../action/activateNotificationsActions';

interface ActivateNotificationsState {
  isEnabled: boolean;
}

const initialState: ActivateNotificationsState = {
  isEnabled: false,
};

export const activateNotificationsReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleNotifications, (state, action: PayloadAction<boolean>) => {
    return {
      ...state,
      isEnabled: action.payload,
    };
  });
});
