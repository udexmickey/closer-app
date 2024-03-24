import { combineReducers, Reducer } from 'redux';
import userPhaseReducer from './userPhaseReducer'; // Assuming userPhaseReducer exports the reducer function
import { UserPhaseState } from '../action/userPhaseAction';



// Define the root state of your application
export interface RootState {
  userPhase: UserPhaseState;
  // Add other states here if needed
}

// Combine reducers to create the root reducer
const rootReducer: Reducer<RootState> = combineReducers({
  userPhase: userPhaseReducer,
  // Add other reducers here if needed
});

export default rootReducer;
