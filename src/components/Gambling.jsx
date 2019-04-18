import React from "react";
import { Row, Col, Button, Spinner } from "reactstrap";

const Gambling = props => {
  const maxRand = props.eggs.length;
  const idEgg1 = Math.floor(Math.random() * maxRand);
  const idEgg2 = Math.floor(Math.random() * maxRand);
  const idEgg3 = Math.floor(Math.random() * maxRand);

  return (
    <div>
      <Row>
        <Col xs={{ size: 3 }}>
          {props.isLoadingEggs ? (
            <Spinner />
          ) : (
            <div>
              <p>{props.eggs[idEgg1].name}</p>
              <img
                src={props.eggs[idEgg1].image}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            </div>
          )}
        </Col>
        <Col xs={{ size: 3 }}>
          {props.isLoadingEggs ? (
            <Spinner />
          ) : (
            <div>
              <p>{props.eggs[idEgg2].name}</p>
              <img
                src={props.eggs[idEgg2].image}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            </div>
          )}
        </Col>
        <Col xs={{ size: 3 }}>
          {props.isLoadingEggs ? (
            <Spinner />
          ) : (
            <div>
              <p>{props.eggs[idEgg3].name}</p>
              <img
                src={props.eggs[idEgg3].image}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            </div>
          )}
        </Col>
        <Col xs={{ size: 3 }} className="d-flex align-items-center">
          <Button onClick={props.onClickRoll}>GO!</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={{ size: 3, offset: 9 }}>
          <Button onClick={props.onClickTryAgain}>Try Again</Button>
          <Button onClick={props.onClickSave}>Save score and leave</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Gambling;
