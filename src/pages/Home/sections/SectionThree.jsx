import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../css/home.module.css";

const SectionThree = () => {
  return (
    <Container className={`mt-5 ${styles.sectionthree_wrapper}`}>
      <Row className="flex-column-reverse flex-md-row" >
        <Col md={6} className="text-center text-md-start mt-5 mt-md-0" >
          <h1>Download Our App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <Row className={styles.sectionthree_btn_wrap}>
            <Col sm={12} lg={6}>
              <button>
              </button>
            </Col>
            <Col>
              <button>
              </button>
            </Col>
          </Row>
        </Col>
        <Col >
          <div
            className={`${styles.sectionthree_img}`}
            style={{
              backgroundImage: `url(${require("../../../assets/img/iPhonePro.png")})`,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionThree;
