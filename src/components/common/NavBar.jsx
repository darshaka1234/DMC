import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "../news/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { clickDrawer } from "../../app/newsSlice";
export const detailsArray = [
  {
    name: "Home",
    icon: <GrHomeRounded className="self-center text-blue-800" />,
  },
  {
    name: "Latest News",
    icon: <HiOutlineNewspaper className="self-center" />,
  },
  { name: "Events", icon: <BsCalendar2Event className="self-center" /> },
  {
    name: "Contacts",
    icon: <MdOutlinePermContactCalendar className="self-center" />,
  },
];
const NavBar = () => {
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.news.openDrawer);

  return (
    <div className="">
      <div className="flex flex-row justify-between py-5 items-center">
        <div className="flex flex-row items-center">
          <div className="mr-3">
            <img src={logo} />
          </div>
          <div>
            <img src={name} />
          </div>
        </div>
        {openDrawer ? <Drawer /> : ""}
        <div>
          <GiHamburgerMenu
            className="sm:hidden"
            onClick={() => dispatch(clickDrawer(true))}
          />
          <div className="flex flex-col sm:flex-row  sm:items-center invisible sm:visible">
            {detailsArray.map((item) => (
              <div
                key={item.name}
                className="flex flex-row mx-3 text-sm font-medium"
              >
                {item.icon}
                <h2 className="mx-2">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-5 -mx-12 md:-mx-24 lg:-mx-52" />
    </div>
  );
};

export default NavBar;
