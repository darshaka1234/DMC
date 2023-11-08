import React from "react";
import { BiCalendar } from "react-icons/bi";
import { convertDate } from "./NewsCard";
import { Link } from "react-router-dom";

const Tile = ({ data }) => {
  return (
    <Link to={`/${data?.hash?.datavalue}`}>
      <div
        className="flex flex-col rounded-lg h-full place-content-end p-3 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${data?.thumbnail.datavalue.fileUrl})`,
        }}
      >
        <h1 className="font-medium text-sm my-2 text-white">
          {data?.title?.datavalue}
        </h1>
        <div className="flex flex-row mt-2 text-white">
          <BiCalendar className="" />
          <p className="text-xs ml-3">{data?.news_date?.datavalue}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tile;
