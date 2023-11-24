import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
const Rightbar = () => {
  return (
    <div className="flex-[3.5] ">
      <div className=" pr-[20px] ">
        <div className="flex items-center">
          {" "}
          <img
            className="w-[40px] h-[40px] mr-[10px]"
            src="assets/gift.jpg"
            alt=""
          />
          <span className="font-light">
            <b>Lucky Aquino</b> and <b>5 other friends</b> have birthday today
          </span>
        </div>
        <img
          className="w-[100%]  rounded-xl mr-[10px]"
          src="assets/blow.jpg"
          alt=""
        />
        <h4 className="my-5 font-bold">Online Friends</h4>
        <ul className="p-0 m-0">
          <li className="flex items-center mb-[15px]">
            <span className="font-semibold">
              {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
