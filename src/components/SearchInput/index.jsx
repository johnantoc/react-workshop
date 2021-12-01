import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";

/**
 * @description - SearchInput Component.
 *
 * @param {string} img - Image String.
 * @returns {Node} - Returns the SearchInput view.
 */
function SearchInput({ focusOut, searchKeyHandler }) {
  const [searchKey, setSearchKey] = useState("");
  const searchHandler = useCallback(debounce(searchKeyHandler, 300), []);

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchKey(value);
    searchHandler(value);
  }

  return (
    <input
      value={searchKey}
      onChange={handleInputChange}
      onBlur={focusOut}
      className="w-11/12 rounded-md p-1 px-1.5 transition duration-1000 ease-in transform scale-100"
    />
  );
}

SearchInput.defaultProps = {
  focusOut: null,
  searchKeyHandler: null,
};

SearchInput.propTypes = {
  focusOut: PropTypes.func,
  searchKeyHandler: PropTypes.func,
};

export default SearchInput;
