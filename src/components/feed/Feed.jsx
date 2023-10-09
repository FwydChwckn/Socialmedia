import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="flex-[5.5]">
      <div className="p-20 ">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
