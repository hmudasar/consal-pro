import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <div className="h-[300px] lg:h-[600px]">
        <img
          src="/images/video.png"
          alt="video"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <button className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
        <img
          src="/images/video-icon-bg.svg"
          className="w-[150px] lg:w-[218px]"
          alt="video bg"
        />
        <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] text-[28px] text-white">
          Play
        </span>
      </button>
    </div>
  );
};

export default Video;
