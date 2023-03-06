import React from "react";
import ReactPlayer from "react-player";
import "../index.css";

const GiftPage = () => {
  return (
    <div className="gift-page true-background--4">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=bCTrbqxmo4Q"
        width="1280px"
        height="729px"
      />
    </div>
  );
};

export default GiftPage;
