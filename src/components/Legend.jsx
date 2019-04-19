import React from "react";

const Legend = () => {
  const egg1 =
    "https://ghraouichocolate.com/wp-content/uploads/Ghraoui-Easter-Egg-Chocolate-Huge@2x.png";
  const egg2 =
    "https://a9effd958e0dc59aaf3b-80520a33cc33a15351bd958c9b8ecc55.ssl.cf2.rackcdn.com/one-step/graphic-egg.png";
  const egg3 =
    "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/ad5d66afe65240749572864e85109ec9_Large.png";
  return (
    <div className="d-flex mt-2">
      <div style={{ width: "33%", height: "18px" }}>
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg2} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg1} style={{ width: "18px" }} alt="An Egg" />= 0 Points
      </div>
      <div style={{ width: "33%", height: "18px" }}>
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg2} style={{ width: "18px" }} alt="An Egg" />= 5 Points
      </div>
      <div style={{ width: "33%", height: "18px" }}>
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />
        <img src={egg3} style={{ width: "18px" }} alt="An Egg" />= 50 Points
      </div>
    </div>
  );
};

export default Legend;
