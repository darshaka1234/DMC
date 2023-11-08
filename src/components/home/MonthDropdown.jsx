import React, { useState } from "react";
import { monthArr } from "./rawdata";
import { useDispatch } from "react-redux";
import { replace } from "../../app/newsSlice";
import { baseUrl } from "./BodySection";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import axios from "axios";

const MonthDropdown = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = (month) => {
    setOpen(false);
    axios
      .get(
        `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC`
      )
      .then(({ data }) => {
        let filteredNews = [];
        if (month == 0) {
          filteredNews = data.dataSets;
        } else {
          data.dataSets?.forEach((item) => {
            const date = new Date(item.news_date?.datavalue);
            console.log(date.getMonth());
            if (date.getMonth() == month - 1) {
              filteredNews.push(item);
            }
          });
        }

        dispatch(replace(filteredNews));
      });
  };

  return (
    <div className=" ">
      <div
        className="flex flex-row items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        Month{open ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
      {open && (
        <ul className="absolute z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
          {monthArr?.map((item) => (
            <li key={item.value}>
              <a onClick={() => handleClick(item.value)}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthDropdown;
