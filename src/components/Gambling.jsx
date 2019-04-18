import React from "react";
import { Row, Col, Button } from "reactstrap";
import gamblingEgg from "./gamblingEgg.png";

const Gambling = () => {
  return (
    <div>
      <Row>
        <Col xs={{ size: 3 }}>
          Egg 1
          <img src={gamblingEgg} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col xs={{ size: 3 }}>
          Egg 2
          <img src={gamblingEgg} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col xs={{ size: 3 }}>
          Egg 3
          <img src={gamblingEgg} alt="" style={{ maxWidth: "100%" }} />
        </Col>
        <Col xs={{ size: 3 }} className="d-flex align-items-center">
          <Button>GO!</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 3, offset: 9 }}>
          <Button>Try Again</Button>
          <Button>Save</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Gambling;
