import { createReducer } from '@reduxjs/toolkit';
import { toggleShowPhase } from '../action/toggleShowCurrentUserPhaseActions';

interface ShowPhaseState {
  isShow: boolean;
}

const initialState: ShowPhaseState = {
  isShow: true,
};

export const toggleShowCurrentPhaseReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleShowPhase, (state, action) => {
    state.isShow = action.payload;
  });
});
