import React from "react";
//import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="headerLogo">
        <img
          src="/home/stephanebs/Downloads/AssetsHackathon/227659.png"
          alt="logo BanditManchoeuf"
        />
      </div>
      <div
        className="headerTitle"
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "LasEnter_PersonalUseOnly.ttf"
        }}
      >
        <h1>Le Bandit ManchOeuf</h1>
      </div>
    </div>
  );
};

export default Header;
