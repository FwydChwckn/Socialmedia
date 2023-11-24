import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-[9]">
          <div className="profiletop">
            <div className="h-[320px] relative">
              <img
                className="w-[100%] h-[250px] object-cover"
                src="assets/post/378521519_695016365993514_3787124153613554491_n.jpg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded rounded-full object-cover absolute left-0 right-0 m-auto"
                src="assets/person/308580969_10225088757559654_747653972760617542_n.jpg"
                alt=""
              />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">Rhenzo Legaspi</h4>
              <span className="profileinfodessc">hello</span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
