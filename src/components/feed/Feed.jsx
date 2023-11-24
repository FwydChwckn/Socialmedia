import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="flex-[5.5]">
      <div className="p-20 ">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
