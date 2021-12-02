/**
 * @description - This file is used to provide all global stores while running a testcase.
 */
import React from "react";
import { render } from "@testing-library/react";
import { Provider as StoreProvider } from "react-redux";

import configureStore from "../store";
const store = configureStore();

const AllProviders = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

const pageData = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "1",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg",
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg",
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg",
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg",
        },
      ],
    },
  },
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, store, pageData };
