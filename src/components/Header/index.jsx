import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import ImgIcon from "../ImgIcon";
import SearchInput from "../SearchInput";
import { filterGrid } from "../../store/actions";

/**
 * @description - Header Component.
 * @returns {Node} - Header View Component
 */
function Header() {
  const dispatch = useDispatch();
  const [filterKey, setfilterKey] = useState("");
  const headerData = useSelector((state) => state.header);
  const [showSearchInput, setShowSearchInput] = useState(false);

  function onClickHandler() {
    setShowSearchInput(true);
  }

  function onOutOfFocus() {
    setShowSearchInput(false);
  }

  function filterImageList(key) {
    setfilterKey(key);
    dispatch(filterGrid(key));
  }

  return (
    <div
      className={`flex flex-row ${
        headerData.sticky ? "sticky top-0 z-10" : "absolute"
      } justify-center items-center space-x-4 p-4 bg-gradient-to-b from-black via-black w-full h-header-height`}
    >
      <div className="flex-initial flex-shrink-0">
        {headerData.backButton ? (
          <ImgIcon img="Back.png" alt="back icon" />
        ) : null}
      </div>
      <div className="flex-auto flex-shrink-0 text-left text-white whitespace-nowrap align-middle text-lg font-semibold">
        {headerData.title}
      </div>
      <div
        className="flex flex-row flex-initial justify-end"
        onClick={onClickHandler}
      >
        <div
          className={`${
            headerData.searchEnabled && !showSearchInput ? "" : "hidden"
          } flex flex-row flex-initial justify-end items-end space-x-2`}
        >
          <span className="w-36 text-white whitespace-nowrap overflow-hidden overflow-ellipsis">
            {filterKey}
          </span>
          <ImgIcon img="search.png" alt="search icon" />
        </div>
        <div
          className={`${
            headerData.searchEnabled && !showSearchInput ? "hidden" : ""
          } flex flex-initial justify-end items-end`}
        >
          <SearchInput
            focusOut={onOutOfFocus}
            searchKeyHandler={filterImageList}
          />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: "",
  backButton: true,
  searchEnabled: true,
};

Header.propTypes = {
  title: PropTypes.string,
  backButton: PropTypes.bool,
  searchEnabled: PropTypes.bool,
};

export default Header;
