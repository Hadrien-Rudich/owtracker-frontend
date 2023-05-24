import React from "react";

const LogoTitle = () => {
  return (
    <div className="titleandimage_container flex flex-col items-start sm:text-4xl text-2xl bg-mainColor z-50 xs:pt-2 xs:pl-4 pt-1 pl-2">
      <img
        className="xs:h-9 sm:h-12 md:h-14 lg:h-16 h-7"
        src="/images/Overwatch_2_text_logo.svg"
        alt=""
      />
      <div className="title_container sm:h-10 h-8">

        <h1 className="italic">Game Tracker</h1>
      </div>
    </div>
  );
};

export default LogoTitle;
