import React from "react";
import ReactPlayer from "react-player";
import "../index.css";

const GiftPage = () => {
  return (
    <div className="gift-page">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="1280px"
        height="729px"
      />
    </div>
  );
};

export default GiftPage;
