import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../css/home.module.css";
import { aboutUs } from "../../../helper/Helper";

const SectionTwo = () => {
  return (
    <Container fluid className="text-center mt-5 px-0">
      <h2>About us</h2>
      <p>
        Postier: An intermediary platform for the dispatch of letters, documents
        and parcels. People who wish to send items within theirs country and
        abroad can contact throught Postier. travellers who are willing to take
        and deliver these items on their journey for a transportation fee.
      </p>
      <div className={` ${styles.sectionTwo_gradient_wrap}`}>
        {aboutUs?.map((item,index) => {
          return (
            <Row key={index} className="gap-5 mt-5 " >
              <Col md={2} lg={1} className=" justify-content-center">
                <div
                  className={`mx-auto ${styles.aboutus_left_img}`}
                  style={{
                    backgroundImage: `url(${item?.img})`,
                  }}
                />
              </Col>
              <Col className="text-center text-md-start align-self-center text-light"><p>
                {item?.para}
                </p></Col>
            </Row>
          );
        })}
      </div>
    </Container>
  );
};

export default SectionTwo;
