import React from "react";
import { BiCopyright } from "react-icons/bi";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";

const Footer = () => {
  const navData = [
    { name: "NAVIGATION", data: ["Home", "Latest News", "Events", "Contacts"] },
    {
      name: "HELP",
      data: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-center w-full">
      <hr className="my-5 -mx-12 md:-mx-24 lg:-mx-52" />
      <div className="flex flex-col sm:flex-row my-10 justify-between ">
        <div>
          <header className="mb-5">
            <div className="flex flex-row items-center">
              <div className="mr-3">
                <img src={logo} />
              </div>
              <div>
                <img src={name} />
              </div>
            </div>
          </header>
          <p className="max-w-xs text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        {navData.map(({ name, data }) => (
          <div className="flex flex-col gap-5" key={name}>
            <div className="font-bold text-blue-700 text-xs mt-5">{name}</div>
            <div className="flex flex-col gap-5">
              {data.map((i) => (
                <a key={i} className="link link-hover text-xs font-medium">
                  {i}
                </a>
              ))}
            </div>
          </div>
        ))}

        <form>
          <div className="font-bold text-blue-700 text-xs my-5">NEWSLETTER</div>
          <fieldset className="form-control w-80">
            <div className="">
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-full pr-16 w-72 sm:w-full  "
              />
              <button className=" bg-indigo-900 text-white rounded py-3 hover:bg-blue-700 w-72 sm:w-full text-xs mt-2">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <hr className="my-5" />
      <div className="flex flex-row gap-3 items-center text-xs ">
        <BiCopyright />
        <p>Copyright 2023, All Rights Reserved by beardy</p>
      </div>
    </div>
  );
};

export default Footer;
