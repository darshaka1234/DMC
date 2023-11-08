import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

import { baseUrl } from "../components/home/BodySection";
import NavBar from "./../components/common/NavBar";
import Footer from "../components/common/Footer";
import { convertDate } from "../components/home/NewsCard";
import ListSection from "./../components/news/ListSection";

const NewsPage = () => {
  const [detail, setDeatil] = useState([]);
  const { hash } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${baseUrl}&f[]=title&f[]=news_date&f[]=cover_images&f[]=long_description&f[]=meta_title&f[]=meta_description&f[]=categories&f[]=reporter&st=0&lt=5&ii[]=${hash}`
      );

      setDeatil(data.dataSets);
    })();
  }, []);

  return (
    <div>
      <div className="mx-12 md:mx-24 lg:mx-52">
        <NavBar />
      </div>
      {detail.map((item) => (
        <div key={item.hash.datavalue} className="w-full">
          <img
            className="w-full max-h-72"
            src={item.cover_images.datavalue.map((i) => i.fileUrl)}
          />
        </div>
      ))}
      <div className="flex flex-col lg:flex-row justify-center divide-x">
        {detail.map((item) => (
          <div key={item.hash.datavalue} className="max-w-2xl">
            <div className="flex flex-row">
              <div className="mx-20 max-w-2xl">
                <h1 className="my-5 font-medium text-4xl">
                  {item.title.datavalue}
                </h1>
                <div className="flex flex-row my-5">
                  <div className="flex flex-row">
                    <SlCalender className="self-center mr-3" />
                    <h3>{convertDate(item.news_date?.datavalue)}</h3>
                  </div>
                  <h3 className="mx-5 font-medium">{`By ${item.reporter?.datavalue}`}</h3>
                </div>
                <hr className="my-5" />
                <p
                  className="text-cancel"
                  dangerouslySetInnerHTML={{
                    __html: item.long_description.datavalue,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ))}
        <ListSection />
      </div>
      <hr className="my-5" />
      <Footer />
    </div>
  );
};

export default NewsPage;
