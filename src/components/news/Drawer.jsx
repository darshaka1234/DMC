import React from "react";
import { detailsArray } from "../common/NavBar";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { clickDrawer } from "../../app/newsSlice";

const Drawer = () => {
  const dispatch = useDispatch();
  return (
    <div className="hover:cursor-pointer x-divider max-w-xs ml-3 mt-5 h-full ">
      <button onClick={() => dispatch(clickDrawer(false))}>
        <RxCross2 />
      </button>
      {detailsArray.map((item) => (
        <div key={item.name} className=" mx-3 text-sm font-medium">
          <div className="flex flex-row py-3">
            {item.icon}
            <h2 className="mx-2">{item.name}</h2>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Drawer;
