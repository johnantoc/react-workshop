import { HEADER, IMAGESDATA } from "./actionTypes";

export const updateHeader = (payload) => {
  return { type: HEADER.UPDATE, payload };
};

export const updateImagesData = (payload) => {
  return { type: IMAGESDATA.UPDATE, payload };
};
