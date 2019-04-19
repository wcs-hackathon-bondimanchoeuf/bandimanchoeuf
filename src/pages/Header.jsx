import React from "react";

import styles from "./Header.module.css";
import { Row, Col } from "reactstrap";
import Logo from "./../assets/gold_egg.png";

const Header = () => {
  return (
    <Row className={`${styles.Main}`}>
      <Col sm="" className="h-100 d-flex justify-content-center">
        <img
          style={{ maxHeight: "70%" }}
          className={`${styles.Logo} pr-3 my-auto`}
          src={Logo}
          alt="logo BanditManchoeuf"
        />
        <h1 className={`${styles.Title} pl-3 my-auto`}>Eggs Machine</h1>
      </Col>
    </Row>
  );
};

export default Header;
