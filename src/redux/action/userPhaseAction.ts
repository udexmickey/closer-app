// userPhaseActions.ts
import { Dispatch } from 'redux';

// actionTypes.ts
export const SET_USER_PHASE = 'SET_USER_PHASE';

// Define the properties of the user phase state
export interface UserPhaseState {
  userPhase: string;
  // Add other properties of the user phase state
}

export const setUserPhase = (phase: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_USER_PHASE, payload: phase });
  };
};
