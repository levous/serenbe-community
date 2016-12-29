import {combineReducers} from 'redux';
import todos from './todos';
import members from './members';

const rootReducer = combineReducers({
  todos,
  members
});

export default rootReducer;
