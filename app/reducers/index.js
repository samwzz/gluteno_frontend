import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
