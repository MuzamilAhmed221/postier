import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";
import {HiMenu} from 'react-icons/hi'

const _Navbar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar>
        <Container className="px-sm-5" fluid style={{ height: "100px" }}>
          <Navbar.Brand className={styles.brandLogo}>
            <Link to={"/"}>Postier.</Link>
          </Navbar.Brand>

          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            responsive="md"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className={styles.brandLogo}>
                <Link>Postier</Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`gap-md-5 gap-sm-1  ${styles.nav_links}`}>
                <Link className={`p-lg-4${styles.nav_links}`}>Home</Link>
                <Link className={`p-lg-4${styles.nav_links}`}>
                  Become a Postie
                </Link>

                <Link className={`p-lg-4${styles.nav_links}`}>
                  Postier of Business
                </Link>
                <Link className={`p-lg-4${styles.nav_links}`}>About us</Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Button
            onClick={handleShow}
            className="me-2 fs-2 d-md-none"
            variant="outline"
          >
            <HiMenu/>
          </Button>
          {/* <button
            className={` d-none d-md-block rounded-3 ${styles.download_btn}`}
            variant="outline-primary"
          >
            <p className="px-3 py-1 ">Download</p>
          </button> */}
          <button className={`d-none d-md-block ${styles.download_btn}`}>
            <p className={`${styles.module}`}>Download</p>
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default _Navbar;
