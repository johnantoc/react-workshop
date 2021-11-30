import { HEADER } from "./actionTypes";

export const updateHeader = (payload) => {
  return { type: HEADER.UPDATE, payload };
};
