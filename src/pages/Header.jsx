import React from "react";
//import "./Header.css"
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Container
        fluid
        style={{ backgroundColor: "blue", marginBottom: "50px" }}
      >
        <Row>
          <Col md="3">
            <div className="headerLogo">
              <img
                src="/home/stephanebs/Downloads/AssetsHackathon/227659.png"
                alt="logo BanditManchoeuf"
              />
            </div>
          </Col>
          <Col md="9">
            <div
              className="headerTitle"
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "LasEnter_PersonalUseOnly.ttf"
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
