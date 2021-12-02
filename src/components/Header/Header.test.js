import { render, screen, cleanup, store } from "../../utils/test-utils";

import Header from "./index";
import { updateHeader } from "../../store/actions";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
    store.dispatch(updateHeader({ title: "testTitle" }));
  });

  afterEach(() => {
    cleanup();
  });

  test("renders Header", () => {
    const backIcon = screen.getByAltText(/back icon/i);
    const searchIcon = screen.getByAltText(/search icon/i);
    const title = screen.getByText(/testTitle/i);

    expect(title).toBeInTheDocument();
    expect(backIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
});
