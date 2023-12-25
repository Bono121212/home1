import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
  return (
    <div className="video">
      <ReactPlayer
        url="https://youtu.be/VmpryMZpkJ4"
        className="react-player"
        playing
        width="100%"
        height="720px"
      />
    </div>
  );
};

export default Player;
