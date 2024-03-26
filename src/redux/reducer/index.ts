import { combineReducers, Reducer } from 'redux';
import userPhaseReducer from './userPhaseReducer'; // Assuming userPhaseReducer exports the reducer function
import { UserPhaseState } from '../action/userPhaseAction';
import { activateNotificationsReducer } from './activateNotificationsReducer';
import { currentUserDetailsReducer } from './currentUserDetailsReducer';
import { toggleShowCurrentPhaseReducer } from './toggleShowCurrentUserPhaseReducer';
import { editProfileReducer } from './editProfileReducer';



// Define the root state of your application
export interface RootState {
  userPhase: UserPhaseState;
  // Add other states here if needed
}

// Combine reducers to create the root reducer
const rootReducer = combineReducers({
  userPhase: userPhaseReducer,
  notifications: activateNotificationsReducer,
  editProfile: editProfileReducer,
  currentUser: currentUserDetailsReducer,
  toggleShowCurrentPhaseTitle: toggleShowCurrentPhaseReducer,
});

export default rootReducer;
