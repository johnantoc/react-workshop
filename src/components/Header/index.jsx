import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { API } from "../../utils/config";

/**
 * @description - Header Component.
 * @returns {Node} - Header View Component
 */
function Header() {
  const headerData = useSelector((state) => state.header);

  return (
    <div
      className={`flex flex-row ${
        headerData.sticky ? "sticky top-0 z-10" : "absolute"
      } justify-center items-center space-x-4 p-4 bg-gradient-to-b from-black via-black w-full h-header-height`}
    >
      {headerData.backButton ? (
        <div className="flex-initial">
          <img
            src={`${API.IMGSRC}/Back.png`}
            alt="back icon"
            className="w-5 transition duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      ) : null}
      <div className="flex-auto text-left text-white align-middle text-lg font-semibold">
        {headerData.title}
      </div>
      {headerData.searchEnabled ? (
        <div className="flex-initial">
          <img
            src={`${API.IMGSRC}/search.png`}
            alt="search icon"
            className="w-5 transition duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      ) : null}
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
