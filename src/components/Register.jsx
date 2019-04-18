import React from "react";
import { Button, Form, Input } from "reactstrap";

const Register = props => {
  return (
    <Form>
      <h2>New Game</h2>
      <p>Enter your name : </p>

      <Input
        value={props.name}
        onChange={props.onChangeTextInput}
        type="text"
        name="name"
        placeholder="Name"
      />

      <Button>Start</Button>
    </Form>
  );
};

export default Register;
