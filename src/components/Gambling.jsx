import React from "react";
import { Row, Col, Button, Spinner } from "reactstrap";

const Gambling = props => {
  const maxRand = props.eggs.length;
  const idEgg1 = Math.floor(Math.random() * maxRand);
  const idEgg2 = Math.floor(Math.random() * maxRand);
  const idEgg3 = Math.floor(Math.random() * maxRand);

  let currentScore = parseInt(props.score);

  if (!props.isLoadingEggs) {
    if (idEgg1 === idEgg2 && idEgg2 === idEgg3) {
      currentScore += 50;
    }
    if (idEgg1 === idEgg2 || idEgg2 === idEgg3 || idEgg3 === idEgg1) {
      currentScore += 5;
    }
  }

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
          {props.isLoadingEggs ? (
            <Spinner />
          ) : (
            <Button value={currentScore - 1} onClick={props.onClickRoll}>
              GO!
            </Button>
          )}
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
