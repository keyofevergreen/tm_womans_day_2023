import React from "react";
import ReactPlayer from "react-player";
import "../style.css";

const GiftPage = () => {
  return (
    <div className="player-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="1280px"
        height="729px"
      />
    </div>
  );
};

export default GiftPage;
