import { HEADER, IMAGESDATA, GRIDFILTER } from "./actionTypes";

export const updateHeader = (payload) => {
  return { type: HEADER.UPDATE, payload };
};

export const updateImagesData = (payload) => {
  return { type: IMAGESDATA.UPDATE, payload };
};

export const filterGrid = (payload) => {
  return { type: GRIDFILTER.FILTER, payload };
};
