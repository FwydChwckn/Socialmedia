import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { Users } from "../../dummyData";
const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);
  const likehandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  return (
    <div className="w-[100%] rounded-xl shadow-xl my-[30px] mx-0">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="text-[15px] font-semibold mx-[10px]">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="text-[12px]">{post?.date}</span>
          </div>
          <div className="topright">
            <FiMoreVertical />
          </div>
        </div>
        <div className="my-[20px] ">
          <span>{post?.desc}</span>
          <img
            className=" mt-[20px] w-[100%] max-h-[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            {" "}
            <img
              className="w-[30px] mr-[5px] cursor-pointer"
              onClick={likehandler}
              src={"/assets/heart.jpg"}
              alt=""
            />
            <img
              className="w-[50px] mr-[5px] cursor-pointer"
              onClick={likehandler}
              src="/assets/like.jpg"
              alt=""
            />
            <span className="text-[15px]">
              {like} people reacted on your post
            </span>
          </div>
          <div className="right">
            <span className="cursor-pointer border-b-[1px]">
              {post?.comment} comments on your post
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
