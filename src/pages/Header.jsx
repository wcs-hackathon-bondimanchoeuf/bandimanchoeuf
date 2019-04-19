import React from "react";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
import Logo from "./../assets/logoBanditManchoeuf.png";

const Header = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          backgroundColor: "blue",
          marginBottom: "50px",
          height: "150px"
        }}
      >
        <Row>
          <Col md="3">
            <div
              className="headerLogo"
              style={{
                padding: "10px"
              }}
            >
              <img src={Logo} alt="ccc" />
            </div>
          </Col>
          <Col md="9">
            <div
              className="headerTitle"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                padding: "10px"
              }}
            >
              <h1>Le Bandit ManchOeuf</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
