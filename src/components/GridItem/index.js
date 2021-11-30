import React, { useState } from "react";
import PropTypes from "prop-types";

import { API } from "../../utils/config";

/**
 * @description - GridItem Component.
 * @returns {Node} - GridItem View Component
 */
function GridItem({ item }) {
  const [imgSrc, setImgSrc] = useState(`${API.IMGSRC}/${item["poster-image"]}`);

  /**
   * @description - Image Load Error handler.
   * @returns {null} - Sets the placeholder image src.
   */
  function onImgLoadError() {
    setImgSrc(API.IMGPLACEHOLDER);
  }

  return (
    <div
      className="min-w-full flex flex-col justify-start items-start pb-10 overflow-hidden"
      title={item.name}
    >
      <img
        src={imgSrc}
        alt={item.name}
        className="flex-none w-full h-full pb-2"
        loading="lazy"
        onError={onImgLoadError}
      />
      <div className="flex-none w-full text-left text-gray-400 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {item.name}
      </div>
    </div>
  );
}

GridItem.defaultProps = {
  item: {},
};

GridItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    "poster-image": PropTypes.string,
  }),
};

export default GridItem;
