import React from "react";

import "./Header.css";
import { Row, Col } from "reactstrap";
import Logo from "./../assets/logoBanditManchoeuf.png";

const Header = () => {
  return (
    <Row className="headerMain">
      <Col sm="2" className="headerLogo">
        <div>
          <img fluid src={Logo} alt="logo BanditManchoeuf" />
        </div>
      </Col>
      <Col sm="10" className="headerTitle">
        <h1>Bandit Manch'Oeuf</h1>
      </Col>
    </Row>
  );
};

export default Header;
