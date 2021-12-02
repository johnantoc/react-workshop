import React from "react";
import PropTypes from "prop-types";

import { API } from "../../utils/config";

/**
 * @description - Image Icon Component.
 * @param {string} img - Image String.
 * @returns {Node} - Returns the image icon view.
 */
function ImgIcon({ img }) {
  return (
    <img
      src={`${API.IMGSRC}/${img}`}
      alt="back icon"
      className="w-5 h-5 transition duration-500 ease-in-out transform hover:scale-110"
    />
  );
}

ImgIcon.defaultProps = {
  img: "",
};

ImgIcon.propTypes = {
  img: PropTypes.string,
};

export default ImgIcon;
