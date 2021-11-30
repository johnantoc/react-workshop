import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateHeader } from "../../store/actions";
import { API } from "../../utils/config";
import GridItem from "../../components/GridItem";

/**
 *  @description - Image List View Page.
 *
 *  @returns {Node} - Returns Images List.
 */
function ImageList() {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [imgList, setImgList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const headerData = useSelector((state) => state.header);

  useEffect(() => {
    /**
     *  @description - Fetches the page data list.
     *
     *  @returns {null} - Returns null.
     */
    (async () => {
      if (hasMore) {
        const response = await fetch(API.DATASRC + `/page${pageNum}.json`);
        const data = await response.json();
        const curList = data?.page["content-items"]?.content || [];
        const updatedList = [...imgList, ...curList];

        dispatch(updateHeader({ title: data?.page?.title || "" }));
        if (
          parseInt(data?.page["total-content-items"], 10) === updatedList.length
        ) {
          setHasMore(false);
        }
        setImgList(updatedList);
      }
    })();
  }, [pageNum]);

  /**
   * @description - Scroll Handler.
   *
   *  @returns {null} - Returns null.
   */
  function handleScroll() {
    const { scrollTop, clientHeight } = scrollRef.current;
    const bottom = scrollTop >= (clientHeight * 3 * pageNum) / 4;
    if (scrollTop > 0 && !headerData.sticky)
      dispatch(updateHeader({ sticky: true }));
    if (bottom) setPageNum((pageNum) => pageNum + 1);
  }

  /**
   * @description - LoadMore Button in case scroll event didn't fire.
   *
   *  @returns {null} - Returns null.
   */
  function loadMore() {
    dispatch(updateHeader({ sticky: true }));
    setPageNum((pageNum) => pageNum + 1);
  }

  return (
    <div
      className="bg-black w-full h-full overflow-y-scroll pb-24"
      ref={scrollRef}
      onScroll={handleScroll}
    >
      <div className="w-full p-4 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
        {imgList.map((imgObj, index) => {
          return (
            <GridItem
              key={`${imgObj.name.replace(" ", "")}_${index}`}
              item={imgObj}
            />
          );
        })}
      </div>
      {hasMore ? (
        <div className="hidden md:flex md:flex-row md:justify-center md:item-center md:mb-4">
          <button
            onClick={loadMore}
            className="p-4 text-white bg-gray-900 hover:bg-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ImageList;
