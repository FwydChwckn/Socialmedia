import React from "react";
import { FiMoreVertical } from "react-icons/fi";
const Post = () => {
  return (
    <div className="w-[100%] rounded-xl shadow-xl my-[30px] mx-0">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover"
              src="/assets/person/28058956_1853191528085766_7106172124278398321_n.jpg"
              alt=""
            />
            <span className="text-[15px] font-semibold mx-[10px]">
              Rhenzo Legaspi
            </span>
            <span className="text-[12px]">5 mins ago</span>
          </div>
          <div className="topright">
            <FiMoreVertical />
          </div>
        </div>
        <div className="my-[20px] ">
          <span>Hey! It's my first post bwehehehe</span>
          <img
            className=" mt-[20px] w-[100%] max-h-[500px] object-contain"
            src="/assets/post/365428985_241858958744772_5538458802001833593_n.jpg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            {" "}
            <img
              className="w-[30px] mr-[5px] cursor-pointer"
              src="/assets/heart.jpg"
              alt=""
            />
            <img
              className="w-[50px] mr-[5px] cursor-pointer"
              src="/assets/like.jpg"
              alt=""
            />
            <span className="text-[15px]">32 people reacted on your post</span>
          </div>
          <div className="right">
            <span className="cursor-pointer border-b-[1px]">
              9 comments on your post
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
