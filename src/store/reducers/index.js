import { combineReducers } from "redux";

import headerReducer from './headerReducer';

/**
 * @description - Root reducer.
 * @param {Array} state - State val.
 * @returns {Array} - State values.
 */
const rootReducer = combineReducers({
  header: headerReducer,
});

export default rootReducer;
