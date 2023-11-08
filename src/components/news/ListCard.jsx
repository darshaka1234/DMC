import React from "react";
import { SlCalender } from "react-icons/sl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { convertDate } from "../home/NewsCard";

const ListCard = ({ item }) => {
  console.log(item);
  return (
    <div className="my-5 ml-10" key={item.hash.datavalue}>
      <div className="flex flex-row">
        <img
          src={item.thumbnail?.datavalue.fileUrl}
          className="flex rounded-xl w-24 h-24  p-2"
        />
        <div className="mx-2 py-2">
          <h1 className="text-sm font-medium">{item.title?.datavalue}</h1>

          <div className="flex flex-row text-sm my-2 text-xs">
            <SlCalender className="self-center mr-3" />
            <h3>{convertDate(item.news_date?.datavalue)}</h3>
          </div>
          <div
            className="text-sm flex flex-row text-xs"
            onClick={() => navigate(`/${item.hash?.datavalue}`)}
          >
            <button className="text-blue-700">READ MORE</button>

            <AiOutlineArrowRight className="self-center text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
