import React from "react";
import { Col, Row, UncontrolledCollapse, Button } from "reactstrap";

const Legend = () => {
  const egg1 =
    "https://ghraouichocolate.com/wp-content/uploads/Ghraoui-Easter-Egg-Chocolate-Huge@2x.png";
  const egg2 =
    "https://a9effd958e0dc59aaf3b-80520a33cc33a15351bd958c9b8ecc55.ssl.cf2.rackcdn.com/one-step/graphic-egg.png";
  const egg3 =
    "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/ad5d66afe65240749572864e85109ec9_Large.png";
  return (
    <div>
      <Row>
        <Col xs="3">
          <Button color="primary" id="toggler" style={{ marginBottom: "2rem" }}>
            Legend
          </Button>
        </Col>

        <Col xs="3">
          <UncontrolledCollapse toggler="#toggler">
            <div>
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg2}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg1}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />{" "}
              = 0 Points
            </div>
          </UncontrolledCollapse>
        </Col>
        <Col xs="3">
          <UncontrolledCollapse toggler="#toggler">
            <div>
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg2}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />{" "}
              = 5 Points
            </div>
          </UncontrolledCollapse>
        </Col>
        <Col xs="3">
          <UncontrolledCollapse toggler="#toggler">
            <div>
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />
              <img
                src={egg3}
                style={{ width: "15%", height: "15%" }}
                alt="An Egg"
              />{" "}
              = 50 Points
            </div>
          </UncontrolledCollapse>
        </Col>
      </Row>
    </div>
  );
};

export default Legend;
