import React from "react";
import { Button, Form, Input } from "reactstrap";
import styles from "./Register.module.css";

const Register = props => {
  return (
    <Form className="mx-auto col-8 col-md-8 col-lg-6 pt-5 text-center">
      <h2 className="text-success font-weight-bold">NEW GAME</h2>
      <p className={`${styles.name} font-weight-bolder`}>Enter your name</p>

      <Input
        className="border-success"
        value={props.name}
        onChange={props.onChangeTextInput}
        type="text"
        name="name"
        onKeyPress={props.onKeyPress}
      />
      <Button
        className="mt-5 px-4 btn btn-warning font-weight-bolder rounded-pill"
        onClick={props.onClickButton}
      >
        START
      </Button>
    </Form>
  );
};

export default Register;
