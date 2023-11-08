import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./../home/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { BsCardList, BsFillGridFill } from "react-icons/bs";
import { append, replace } from "../../app/newsSlice";
import CategoryDropdown from "./CategoryDropdown";
import MonthDropdown from "./MonthDropdown";
import Search from "./Search";
import ListView from "./ListView";

export const baseUrl =
  "https://showcase.dmc.smart360web.com/api/v1/news/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB";

const BodySection = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.newsData);
  const [pageCount, setPageCount] = useState(25);
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC`
      );

      dispatch(replace(data.dataSets));
    })();
  }, []);

  const handleLoadMore = async () => {
    setPageCount((prev) => (prev += 25));
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=${pageCount}&lt=24&sp=news_date&sd=DESC`
    );
    dispatch(append(data.dataSets));
  };

  return (
    <div className="grid justify-items-center gap-6">
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="divide-x grid grid-flow-col gap-5 items-center">
          <p>Filter</p>
          <div className="pl-5">
            <MonthDropdown />
            <CategoryDropdown />
          </div>
        </div>
        <div className="grid grid-flow-col gap-5 items-center">
          <Search />
          <BsCardList className="text-xl" onClick={() => setGridView(false)} />
          <BsFillGridFill
            className="text-xl"
            onClick={() => setGridView(true)}
          />
        </div>
      </div>
      {gridView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
          {newsData?.map((item) => (
            <NewsCard key={item.hash?.datavalue} data={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 w-full">
          {newsData?.map((item) => (
            <ListView key={item.hash?.datavalue} data={item} />
          ))}
        </div>
      )}
      <button
        className=" bg-indigo-900 text-white rounded py-2 hover:bg-blue-700 w-24 text-xs "
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </div>
  );
};

export default BodySection;
