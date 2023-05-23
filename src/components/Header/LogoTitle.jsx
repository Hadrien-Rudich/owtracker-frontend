import React from "react";

const LogoTitle = () => {
  return (
    <div className="titleandimage_container flex flex-col items-start sm:text-4xl text-3xl bg-mainColor z-50 p-4 ">
      <img
        className="h-14"
        src="/images/Overwatch_2_text_logo.svg"
        alt=""
      />
      <div className="title_container h-10">

        <h1 className="italic">Game Tracker</h1>
      </div>
    </div>
  );
};

export default LogoTitle;
