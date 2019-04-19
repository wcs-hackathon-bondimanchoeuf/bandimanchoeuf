import React from "react";
import { Button, Spinner } from "reactstrap";
import style from "./Gambling.module.css";

const Gambling = props => {
  return (
    <div className={style.gambling}>
      <div className={style.machine}>
        {props.isLoadingEggs ? (
          <div className={style.spinner}>
            <Spinner />
          </div>
        ) : (
          <div className={style.slot}>
            <p
              style={{
                color: "#17a2b8",
                border: "1px solid lightgreen",
                borderRadius: "5px",
                margin: "2px"
              }}
            >
              {props.displayedEggs[0].name}
            </p>
            <img
              src={props.displayedEggs[0].image}
              alt=""
              className={style.imageEgg}
            />
          </div>
        )}
        {props.isLoadingEggs ? (
          <div className={style.spinner}>
            <Spinner />
          </div>
        ) : (
          <div className={style.slot}>
            <p
              style={{
                color: "#17a2b8",
                border: "1px solid lightgreen",
                borderRadius: "5px",
                margin: "2px"
              }}
            >
              {props.displayedEggs[1].name}
            </p>
            <img
              src={props.displayedEggs[1].image}
              alt=""
              className={style.imageEgg}
            />
          </div>
        )}
        {props.isLoadingEggs ? (
          <div className={style.spinner}>
            <Spinner />
          </div>
        ) : (
          <div className={style.slot}>
            <p
              style={{
                color: "#17a2b8",
                border: "1px solid lightgreen",
                borderRadius: "5px",
                margin: "2px"
              }}
            >
              {props.displayedEggs[2].name}
            </p>
            <img
              src={props.displayedEggs[2].image}
              alt=""
              className={style.imageEgg}
            />
          </div>
        )}
      </div>
      <div className={style.buttons}>
        <div className={style.goButton}>
          <Button color="danger" onClick={props.onClickRoll}>
            GO!
          </Button>
        </div>
        <div className="d-flex flex-column justify-content-around m-1">
          <Button color="primary" onClick={props.onClickTryAgain}>
            Try Again
          </Button>
          <Button color="warning" onClick={props.onClickSave}>
            Save and exit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gambling;
