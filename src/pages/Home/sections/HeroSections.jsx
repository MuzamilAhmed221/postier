import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../css/home.module.css";

const HeroSections = () => {
  return (
    <div className="mt-md-5" id="Home">
      <Container>
        <Row className="">
          <Col className={styles.hero_leftText_wrap} md={"7"}>
            <h2>Find your posties, your worldwide express deliverer</h2>
            <p>
              Posties: Someone who is travelling and want to pick up and deliver
              your post. Confirmed delivery within 4 days for international
              delivery and 1 day for national post. You save up to 70% of the
              shipping costs.
            </p>
          </Col>
          <Col className={`mt-5 mt-md-0  ${styles.hero_rightImg_wrap}`}>
            <div style={{
                backgroundImage: `url(${require("../../../assets/img/Locator.png")})`,
              }}>

            </div>
            <div
              style={{
                backgroundImage: `url(${require("../../../assets/img/amico.png")})`,
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSections;
