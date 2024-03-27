// reducers/toggleShowCurrentUserPhaseReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { toggleShowPhase } from '../action/toggleShowCurrentUserPhaseActions';

interface ToggleShowPhaseState {
  isShow: boolean;
}

const initialState: ToggleShowPhaseState = {
  isShow: true,
};

export const toggleShowCurrentPhaseReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleShowPhase, (state, action) => {
    state.isShow = action.payload;
  });
});
