import { GRIDFILTER } from "../actions/actionTypes";

const initialState = {
  searchKey: "",
};

const gridFilterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GRIDFILTER.FILTER:
      return { ...state, searchKey: payload };
    default:
      return state;
  }
};

export default gridFilterReducer;
