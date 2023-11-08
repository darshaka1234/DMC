import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { baseUrl } from "../components/home/BodySection";
import NavBar from "./../components/common/NavBar";
import Footer from "../components/common/Footer";
import { convertDate } from "../components/home/NewsCard";
import ListSection from "./../components/news/ListSection";

const NewsPage = () => {
  const [detail, setDeatil] = useState([]);
  const { hash } = useParams();
  const navigate = useNavigate();

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
        {detail.map((item) => (
          <div
            key={item.hash.datavalue}
            className="w-full flex sm:justify-between my-5"
          >
            <h3 className="text-gray-700 text-xs">
              {item.meta_description.datavalue}
            </h3>
            <button
              className="text-blue-700 text-xs flex flex-row gap-3 items-center"
              onClick={() => navigate(-1)}
            >
              <AiOutlineArrowLeft />
              Go Back
            </button>
          </div>
        ))}
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
                <h1 className="my-5 font-medium text-3xl">
                  {item.title.datavalue}
                </h1>
                <div className="flex flex-row my-5">
                  <div className="flex flex-row text-xs">
                    <SlCalender className="self-center mr-3" />
                    <h3>{convertDate(item.news_date?.datavalue)}</h3>
                  </div>
                  <h3 className="mx-5 font-medium text-xs">{`By ${item.reporter?.datavalue}`}</h3>
                </div>
                <hr className="my-5" />
                <p
                  className="text-cancel text-xs"
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
      <hr className="my-5 -mx-52" />
      <div className="mx-12 md:mx-24 lg:mx-52">
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;
