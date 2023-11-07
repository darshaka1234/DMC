import React from "react";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

export const convertDate = (date) => {
  const dateObj = parseISO(date);

  return format(dateObj, "dd MMM yyyy");
};

const NewsCard = ({ data }) => {
  const { title, thumbnail, short_description, news_date, reporter, hash } =
    data;

  return (
    <div className="grid m-2 rounded-md content-between">
      <div>
        <img
          src={thumbnail?.datavalue.fileUrl}
          alt={title?.datavalue}
          className="rounded-lg w-full h-52"
        />
        <div className="flex flex-row mt-2">
          <BiCalendar className="" />
          <p className="text-xs ml-3">{convertDate(news_date?.datavalue)}</p>
        </div>
        <h1 className="font-medium text-sm my-2">{title?.datavalue}</h1>
        <p className="text-xs text-gray-500">{short_description?.datavalue}</p>
        <p className="text-xs my-2">{`By ${reporter?.datavalue}`}</p>
      </div>
      <div className="flex  justify-self-end">
        <Link
          to={`/${hash?.datavalue}`}
          className="flex flex-row  text-blue-800 text-xs items-center"
        >
          <button className=" mr-2 ">Read more</button>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
