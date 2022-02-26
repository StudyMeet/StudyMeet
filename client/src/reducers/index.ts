import { combineReducers } from 'redux';

import { socketIOReducer } from './socketIOReducer';

export default combineReducers({
  socketIO: socketIOReducer,
});