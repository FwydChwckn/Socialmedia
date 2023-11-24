import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPersonFill, BsFillChatFill } from "react-icons/bs";
import { RiNotification4Fill } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className=" h-[50px] w-[100%] justify-justify-between flex bg-indigo-500 items-center  sticky z-40 top-0">
      <div className="flex-[3]">
        <span className="text-[30px] ml-[20px] font-bold text-white cursor-pointer">
          Peacebook
        </span>
      </div>
      <div className="items-center flex flex-[5]">
        <div className=" w-full flex   bg-white h-[30px] border border-black rounded-lg items-center">
          <BiSearchAlt className="text-[20px] ml-[10px]" />
          <input
            placeholder="Search for Friends, post or video"
            className="border-none w-[70%] focus:outline-none"
          />
        </div>
      </div>
      <div className=" flex-[4] flex items-center justify-around text-white">
        <div className="mr-[10px] text-[14px] cursor-pointer">
          <span className="mr-[10px] text-[14px] cursor-pointer">Homepage</span>
          <span className="mr-[10px] text-[14px] cursor-pointer">Timeline</span>
        </div>
        {/*tiobaricons */}
        <div className="flex ">
          {/*tiobariconsitems */}
          <div className="mr-[15px] cursor-pointer relative">
            {/*tiobariconsbadge */}
            <BsFillPersonFill className="w-[20px] h-[20px]" />
            <span className="w-[15px] h-[15px] bg-red-600 rounded-lg text-white absolute  top-[-10px] right-[-10px]  items-center justify-center flex">
              1
            </span>
          </div>
          <div className="mr-[15px] cursor-pointer relative">
            <BsFillChatFill className=" w-[20px] h-[20px]" />
            <span className="w-[15px] h-[15px] bg-red-600 rounded-lg text-white absolute  top-[-10px] right-[-10px]  items-center justify-center flex">
              5
            </span>
          </div>
          <div className="mr-[15px] cursor-pointer relative">
            <RiNotification4Fill className="w-[20px] h-[20px]" />
            <span className="w-[15px] h-[15px] bg-red-600 rounded-lg text-white absolute  top-[-10px] right-[-10px]  items-center justify-center flex">
              1
            </span>
          </div>
        </div>
        <img
          src="/assets/person/28058956_1853191528085766_7106172124278398321_n.jpg"
          alt=""
          className="h-[32px] w-[32px] rounded-xl object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;
