import { SET_USER_PHASE, UserPhaseState } from "../action/userPhaseAction";

// THese are the possible user phases as at the time of writing
enum UserPhases {
  FOLICULAR = 'follicular',
  PERIOD = 'period',
  Luteal = 'luteal',
  OVULATORY = 'ovulatory',
}

const initialState: UserPhaseState = {
  userPhase: 'ovulatory' // Initial phase value fetched from the backend or set to a default value
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
