import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
             // href="https://www.creative-tim.com?ref=adr-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Onlinenanys
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="https://blog.onlinenanys.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://facebook.com/onlinenanys"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="http://instagram.com/onlinenanys.official"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </NavLink>
            </NavItem>

          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
