import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";

const NavBar = () => {
  const detailsArray = [
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
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between py-5 ">
        <div className="flex flex-row items-center">
          <div className="mr-3">
            <img src={logo} />
          </div>
          <div>
            <img src={name} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  items-center">
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
      <hr className="my-5 -mx-12 md:-mx-24 lg:-mx-52" />
    </div>
  );
};

export default NavBar;
