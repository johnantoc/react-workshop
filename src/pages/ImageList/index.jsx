import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateHeader, updateImagesData } from "../../store/actions";
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
  const [masterList, setMasterList] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { header, imagesData, filter } = useSelector((state) => state);

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

        dispatch(updateHeader({ title: data?.page?.title || "" }));
        dispatch(updateImagesData(data));
      }
    })();
  }, [pageNum]);

  useEffect(() => {
    if (imagesData) {
      const curList = imagesData?.page["content-items"]?.content || [];
      const updatedList = [...imgList, ...curList];
      const allLoaded =
        parseInt(imagesData?.page["total-content-items"], 10) ===
        updatedList.length;
      if (allLoaded) setHasMore(false);
      setMasterList(updatedList);
      setImgList(updatedList);
    }
  }, [imagesData]);

  useEffect(() => {
    if (filter.searchKey) {
      const updatedList = masterList.filter(({ name }) =>
        name.toLowerCase().includes(filter.searchKey.toLowerCase())
      );
      setImgList(updatedList);
    } else setImgList([...masterList]);
  }, [filter]);

  /**
   * @description - Scroll Handler.
   *
   *  @returns {null} - Returns null.
   */
  function handleScroll() {
    const { scrollTop, clientHeight } = scrollRef.current;
    const bottom = scrollTop >= (clientHeight * 3 * pageNum) / 4;
    if (scrollTop > 0 && !header.sticky)
      dispatch(updateHeader({ sticky: true }));
    if (bottom) setPageNum((pageNum) => pageNum + 1);
  }

  /**
   * @description - LoadMore Button in case no overflow.
   *
   *  @returns {null} - Returns null.
   */
  function loadMore() {
    dispatch(updateHeader({ sticky: true }));
    setPageNum((pageNum) => pageNum + 1);
  }

  return (
    <div
      className="bg-black w-full h-full overflow-y-auto pb-24"
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
      {imgList.length && hasMore ? (
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
