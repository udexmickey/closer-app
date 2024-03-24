import { SET_USER_PHASE, UserPhaseState } from "../action/userPhaseAction";

const initialState: UserPhaseState = {
  userPhase: 'follicular' // Initial phase value fetched from the backend or set to a default value
};

const userPhaseReducer = (state: UserPhaseState = initialState, action: any): UserPhaseState => {
  switch (action.type) {
    case SET_USER_PHASE:
      return { ...state, userPhase: action.payload };
    default:
      return state;
  }
};

export default userPhaseReducer;
