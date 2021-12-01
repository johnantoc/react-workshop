import { IMAGESDATA } from "../actions/actionTypes";

const initialState = null;

const imagesListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGESDATA.UPDATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default imagesListReducer;