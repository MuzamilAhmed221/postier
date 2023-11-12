import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../css/home.module.css";

const SectionOne = (props) => {
  const { heading, para, bottom_description, rows, inner_heading ,id} =
    props?.items;
  return (
    <div className={`${styles.sectionOne_wrap}`} id={id}>
      <Container>
        <Row className={`text-center `}>
          <h2 className="">{heading}</h2>
          <p>{para}</p>
        </Row>

        <Row className={`rounded-5  ${styles.sectionOne_steps_wrap}`}>
          <h2 className={` ${styles.inner_heading}`}>{inner_heading}</h2>
          <Col>
            {rows.map((item, index) => {
              if(index == 2) return
              return (
                <Row
                 key={index} className={`  justify-content-center justify-content-md-between  ${styles.step_row}`}
                >
                  <Col
                    className={`mt-5 mt-md-0 ${styles.sectionOneStep}`}
                    lg={3}
                    md={6}
                  >
                    <h2>{item?.colOne?.num}</h2>
                    <div className={` ${styles.step}`}>
                      <p>{item?.colOne?.step}</p>
                    </div>
                    <p className="mt-5">{item?.colOne?.description}</p>
                  </Col>
                  <Col
                    className={` d-lg-block d-none ${styles.steps_col}`}
                    md={7}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 679 130"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.85498 66.5922C69.1776 10.7387 218.94 -46.9417 344.315 66.5922C434.789 148.521 615.617 140.545 677.974 95.2189"
                        stroke="#fff"
                        strokeWidth="0.879375"
                        strokeDasharray="5.28 5.28"
                      />
                    </svg>
                  </Col>
                  <Col
                    className={`mt-5 mt-md-0 ${styles.sectionOneStep}`}
                    lg={3}
                    md={6}
                  >
                    <h2>{item?.colTwo?.num}</h2>
                    <div className={` ${styles.step}`}>
                      <p>{item?.colTwo?.step}</p>
                    </div>
                    <p className="mt-5">{item?.colTwo?.description}</p>
                  </Col>
                </Row>
              );
            })}

           {
            rows?.length > 2 && 
            <Row className={`  justify-content-center  ${styles.step_row}`}>
            <Col
              className={`mt-5 mt-md-0 ${styles.sectionOneStep}`}
              lg={3}
              md={6}
            >
              <h2>5</h2>
              <div className={` ${styles.step}`}>
                <p>Deliver shipments</p>
              </div>
              <p className="mt-5">
                After arriving at your destination, deliver the shipment to
                the specified location ( recipient's address or pickup relay )
                upon checking the recipient's identification.
              </p>
            </Col>
          </Row>
           }
          </Col>
        </Row>
        <p className={`mt-5 text-center ${styles.steps_bottom_text}`}>
          {bottom_description}
        </p>
      </Container>
    </div>
  );
};

export default SectionOne;
