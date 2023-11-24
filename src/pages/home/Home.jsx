import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
const home = () => {
  return (
    <>
      <Topbar />
      <div className="mt-[10px] flex w-[100%] ">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default home;
