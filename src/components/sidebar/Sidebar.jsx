import React from "react";
import { MdRssFeed, MdGroups2 } from "react-icons/md";
import { BiSolidGraduation } from "react-icons/bi";
import {
  BsChatSquareDotsFill,
  BsFillPlayCircleFill,
  BsFillBookmarkCheckFill,
  BsFillQuestionCircleFill,
  BsBriefcaseFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="flex-[3]  flex overflow-y-scroll h-screen top-[50px]  sticky">
      <div className="p-[20px] mb-[50px]">
        <ul className="p-0 m-0 list-none">
          {" "}
          <li className="flex items-center mb-[20px]">
            <MdRssFeed className="mr-[15px]" />
            <span className="">Feed</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsChatSquareDotsFill className="mr-[15px]" />
            <span className="">Chats</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillPlayCircleFill className="mr-[15px]" />
            <span className="">Videos</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <MdGroups2 className="mr-[15px]" />
            <span className="">Groups</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillBookmarkCheckFill className="mr-[15px]" />
            <span className="">Bookmarks</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillQuestionCircleFill className="mr-[15px]" />
            <span className="">Questions</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsBriefcaseFill className="mr-[15px]" />
            <span className="">Jobs</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillCalendarWeekFill className="mr-[15px]" />
            <span className="">Events</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BiSolidGraduation className="mr-[15px]" />
            <span className="">Courses</span>
          </li>
        </ul>
        <button className="w-[150px] border-none p-[10px] rounded-xl font-bold">
          Show more
        </button>
        <hr className="my-[20px]" />
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
              alt=""
            />
            <span className="">Mahal ♥️💕❤️❣️❤️‍🔥😘🥰</span>
          </li>

          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/86187781_3100687913297121_5740482605833256960_n.jpg"
              alt=""
            />
            <span className="">Andree Bren Salar</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/379138306_6927978013920316_8824922346274207482_n.jpg"
              alt=""
            />
            <span className="">Lucky Aquino</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/380010235_7005289759505362_3253692336494217914_n.jpg"
              alt=""
            />
            <span className="">Mark Joloh Rejano</span>
          </li>
          <li className="flex items-center mb-[15px]">
            <img
              className="w-[32px] h-[32px] rounded-xl object-cover mr-[10px]"
              src="/assets/person/73341408_2898169826862926_7394653508579885056_n.jpg"
              alt=""
            />
            <span className="">Carlitos Miguel Asuncion</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
