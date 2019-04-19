import React from "react";
import { Row, Col, Button, Spinner } from "reactstrap";

const Gambling = props => {
  return (
    <div>
      <Row>
        <Col xs={{ size: 3 }}>
          {props.isLoadingEggs ? (
            <Spinner />
          ) : (
            <div>
              <p>{props.displayedEggs[0].name}</p>
              <img
                src={props.displayedEggs[0].image}
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
              <p>{props.displayedEggs[1].name}</p>
              <img
                src={props.displayedEggs[1].image}
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
              <p>{props.displayedEggs[2].name}</p>
              <img
                src={props.displayedEggs[2].image}
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
            <Button onClick={props.onClickRoll}>GO!</Button>
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
