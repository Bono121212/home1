import React from "react";
import ReactPlayer from "react-player";
// import preview from "../../../../../images/all/btn-zoom-20-px.png";
// import previewImg from "../../../../../images/all/preview-img.png";

const Player = () => {
  return (
    <div className="video quiz">
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
