import { render, screen, cleanup } from "../../utils/test-utils";

import ImgIcon from "./index";

describe("ImgIcon", () => {
  beforeEach(() => {
    const props = { img: "Back.png", alt: "back icon" };
    render(<ImgIcon {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders ImgIcon", () => {
    const backIcon = screen.getByAltText(/back icon/i);

    expect(backIcon).toBeInTheDocument();
  });
});
