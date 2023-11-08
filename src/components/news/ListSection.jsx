import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";
import axios from "axios";
import { baseUrl } from "../home/BodySection";

const ListSection = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=0&lt=6&sp=news_date&sd=DESC`
      );

      setListData(data.dataSets);
    })();
  }, []);
  return (
    <div className="max-w-xl mt-5 mr-12 sm:ml-10">
      <h1 className="font-medium text-3xl mb-5 ml-10">Latest News</h1>
      {listData?.map((item) => (
        <ListCard key={item.hash?.datavalue} item={item} />
      ))}
    </div>
  );
};

export default ListSection;
