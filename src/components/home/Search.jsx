import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { baseUrl } from "./BodySection";
import { replace } from "../../app/newsSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    setSearchText(e);
    const { data } = await axios.get(
      `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=24&sp=news_date&sd=DESC&qf[]=title&qt=1&q=${searchText}`
    );

    dispatch(replace(data.dataSets));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchText}
      className="input input-bordered w-full max-w-xs input-sm mr-5"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};
export default Search;
