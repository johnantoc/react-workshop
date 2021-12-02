import { render, screen, cleanup, fireEvent } from "../../utils/test-utils";

import SearchInput from "./index";

describe("SearchInput", () => {
  beforeEach(() => {
    const props = { focusOut: jest.fn(), searchKeyHandler: jest.fn() };
    render(<SearchInput {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders SearchInput", () => {
    const inputNode = screen.getByPlaceholderText("search");
    expect(inputNode).toBeInTheDocument();
  });

  test("can type in SearchInput", () => {
    const inputNode = screen.getByPlaceholderText("search");
    expect(inputNode).toHaveValue("");
    // Change input
    fireEvent.change(inputNode, { target: { value: "Test string" } });
    expect(inputNode).toHaveValue("Test string");
  });
});
