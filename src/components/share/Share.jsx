import React from "react";
import { MdPermMedia, MdEmojiEmotions } from "react-icons/md";
import { BiSolidLabel } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Share = () => {
  return (
    <div className="w-[100%] h-[170px] rounded-sm shadow-xl">
      <div className="p-[10px]">
        <div className="items-center flex">
          <img
            className="w-[50px] h-[50px] rounded-lg object-cover mr-5"
            src="/assets/person/28058956_1853191528085766_7106172124278398321_n.jpg"
            alt=""
          />
          <input
            className="w-[80%] outline-none"
            placeholder="What's in your mind "
          />
        </div>
        <hr className="m-[20px]" />
        <div className="flex items-center justify-between">
          <div className="flex ml-[20px]">
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdPermMedia className="text-[18px] mr-[3px] text-orange-700" />
              <span className="text-[14px] font-bold">Photo or Video</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer ">
              <BiSolidLabel className="text-[18px] mr-[3px] text-blue-700" />
              <span className="text-[14px] font-bold">Tag</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <FaLocationDot className="text-[18px] mr-[3px] text-green-700" />
              <span className="text-[14px] font-bold">Location</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdEmojiEmotions className="text-[18px] mr-[3px] text-yellow-700" />
              <span className="text-[14px] font-bold">Feelings</span>
            </div>
          </div>
          <button className="border-none p-[7px] rounded-md bg-green-700 font-bold text-white mr-[20px] cursor-pointer">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
