import { combineReducers } from "redux";

import headerReducer from "./headerReducer";
import imagesDataReducer from "./imagesDataReducer";

/**
 * @description - Root reducer.
 * @param {Array} state - State val.
 * @returns {Array} - State values.
 */
const rootReducer = combineReducers({
  header: headerReducer,
  imagesData: imagesDataReducer,
});

export default rootReducer;
