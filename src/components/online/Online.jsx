import React from "react";

const Online = ({ user }) => {
  return (
    <li className="flex items-center mb-[15px]">
      <div className="mr-[10px] relative">
        <img
          className="w-[40px] h-[40px] rounded-xl object-cover"
          src={user.profilePicture}
          alt=""
        />
        <span className="right-0 top-[-2px] absolute bg-lime-600 rounded-full h-[12px] w-[12px] border-[2px] border-outline-solid-white"></span>
      </div>
      <span className="font-semibold">{user.username}</span>
    </li>
  );
};

export default Online;
