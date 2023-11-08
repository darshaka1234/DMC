import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "./BodySection";
import Tile from "./Tile";

const TileSection = () => {
  const [tileData, setTileData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${baseUrl}&f[]=title&f[]=news_date&f[]=thumbnail&f[]=short_description&f[]=categories&f[]=reporter&st=1&lt=5&sp=news_date&sd=DESC`
      );

      setTileData(data.dataSets);
    })();
  }, []);

  return (
    <div className="h-full">
      <h1 className="font-medium text-3xl mb-5 ">Latest News</h1>
      <div className="grid grid-rows-2 grid-col-1 md:grid-col-2 xl:grid-flow-col gap-5 my-10  sm:h-80 ">
        <div className="row-span-2">
          <Tile data={tileData[0]} />
        </div>
        <div className="">
          <Tile data={tileData[3]} />
        </div>
        <div className="">
          <Tile data={tileData[1]} />
        </div>
        <div className="row-start-1 row-end-3">
          <Tile data={tileData[2]} />
        </div>
      </div>
    </div>
  );
};

export default TileSection;
