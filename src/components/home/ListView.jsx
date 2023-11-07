import React from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { convertDate } from "./NewsCard";

const ListView = ({ data }) => {
  const { title, thumbnail, short_description, news_date, reporter, hash } =
    data;
  return (
    <div className=" w-full h-40 my-5 rounded-lg p-2 bg-gray-100">
      <div className="h-full flex flex-row">
        <img
          src={thumbnail?.datavalue.fileUrl}
          alt={title?.datavalue}
          className="rounded-lg w-40 h-full"
        />
        <div className="flex flex-col ml-5 w-full h-full  justify-between">
          <div>
            <h1 className="font-medium text-sm my-2">{title?.datavalue}</h1>
            <div className="flex flex-row mt-2">
              <BiCalendar className="" />
              <p className="text-xs ml-3">
                {convertDate(news_date?.datavalue)}
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              {short_description?.datavalue}
            </p>
            <p className="text-xs my-2">{`By ${reporter?.datavalue}`}</p>
          </div>
          <div className="self-end">
            <Link
              to={`/${hash?.datavalue}`}
              className="flex flex-row  text-blue-800 text-xs items-center"
            >
              <button className=" mr-2 ">Read more</button>
              <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
