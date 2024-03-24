import { createStore, combineReducers } from 'redux';
import userPhaseReducer from '../reducer/userPhaseReducer';

const rootReducer = combineReducers({
  userPhase: userPhaseReducer
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
