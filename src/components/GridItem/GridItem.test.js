import { render, screen, cleanup } from "../../utils/test-utils";

import GridItem from "./index";

describe("GridItem", () => {
  beforeEach(() => {
    const item = { name: "The Birds", "poster-image": "poster1.jpg" };
    render(<GridItem item={item} />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders GridItem", () => {
    const name = screen.getByText(/The Birds/i);
    expect(name).toBeInTheDocument();
  });
});
