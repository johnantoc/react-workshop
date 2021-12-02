import { render, screen, cleanup, store, pageData } from "./utils/test-utils";

import App from "./App";
import { updateHeader, updateImagesData } from "./store/actions";

beforeEach(() => {
  render(<App />);
  store.dispatch(updateHeader({ title: "Romantic Comedy" }));
  store.dispatch(updateImagesData(pageData));
});

afterEach(() => {
  cleanup();
});

test("renders app", () => {
  render(<App />);
  const gridItems = screen.getAllByAltText(/Family Pot/i);
  const searchIcon = screen.getAllByAltText(/search icon/i);
  const title = screen.getAllByText(/Romantic Comedy/i);

  expect(title[0]).toBeInTheDocument();
  expect(gridItems[0]).toBeInTheDocument();
  expect(searchIcon[0]).toBeInTheDocument();
});
