import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "./BodySection";
import { replace } from "../../app/newsSlice";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([
    { hash: { datavalue: "" }, name: { datavalue: "All" } },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://showcase.dmc.smart360web.com/api/v1/news-categories/getall?api_key=5cef0b93x6b269ec&api_user=UI_TEST_WEB&f[]=name&st=0&lt=10&sp=name&sd=ASC"
      );
      setCategories((prev) => [...prev, ...data.dataSets]);
    })();
  }, []);

  const handleClick = async (hash) => {
    setOpen(false);
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC&categories[]=${hash}`
    );
    console.log(data.dataSets);
    dispatch(replace(data.dataSets));
  };

  return (
    <div className=" ">
      <div
        className="flex flex-row items-center dropdown hover:cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        Select Category{open ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
      {open && (
        <ul className=" absolute z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
          {categories?.map((item) => (
            <li key={item.name?.datavalue}>
              <a onClick={() => handleClick(item.hash?.datavalue)}>
                {item.name?.datavalue}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
