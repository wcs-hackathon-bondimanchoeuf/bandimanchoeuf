import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <Form>
        <h2>New Game</h2>
        <FormGroup>
          <Label for="fieldname">Your name</Label>
          <Input type="text" name="name" id="fieldname" placeholder="Name" />
        </FormGroup>

        <Button>Start</Button>
      </Form>
    );
  }
}

export default Register;
