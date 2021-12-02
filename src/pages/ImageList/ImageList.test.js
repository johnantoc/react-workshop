import {
  render,
  screen,
  cleanup,
  store,
  pageData,
} from "../../utils/test-utils";

import ImageList from "./index";
import { updateHeader, updateImagesData } from "../../store/actions";

describe("ImageList", () => {
  beforeEach(() => {
    render(<ImageList />);
    store.dispatch(updateHeader({ title: "testTitle" }));
    store.dispatch(updateImagesData(pageData));
  });

  afterEach(() => {
    cleanup();
  });

  test("renders ImageList", async () => {
    const name = await screen.findAllByText(/The Birds/i);
    expect(name[0]).toBeInTheDocument();
  });
});
