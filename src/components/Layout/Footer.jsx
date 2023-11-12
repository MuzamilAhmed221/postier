import React from "react";
import { Container } from "react-bootstrap";
import styles from "./layout.module.css";
import { navItems } from "../../helper/Helper";

const Footer = () => {
  return (
    <Container fluid className={styles.footer_wrap}>
      <ul>
        {navItems.map((item, index) => {
          return <li key={index}><a href={`#${item}`}>{item}</a></li>;
        })}
      </ul>
      <h4>@info@postier.org</h4>
    </Container>
  );
};

export default Footer;
