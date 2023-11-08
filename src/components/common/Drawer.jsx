import React from "react";
import { detailsArray } from "./NavBar";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { clickDrawer } from "../../app/newsSlice";

const Drawer = () => {
  const dispatch = useDispatch();
  return (
    <div className=" x-divider absolute z-50 menu shadow-xl bg-base-100 h-full w-full -mt-10 rounded-tl-lg">
      <button className="m-3 " onClick={() => dispatch(clickDrawer(false))}>
        <RxCross2 />
      </button>
      {detailsArray.map((item) => (
        <div key={item.name} className=" mx-3 text-sm font-medium">
          <div className="flex flex-row py-3">
            {item.icon}
            <h2 className="mx-2 hover:cursor-pointer">{item.name}</h2>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Drawer;
