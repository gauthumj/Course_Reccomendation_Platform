import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
function Navbarmain() {
  return (
    <Navbar bg="dark" className="text-light bg-dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./home" style={{ color: "lightblue" }}>
          Course Recommendation App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Form className="d-flex mx-3 my-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <br />
          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            }
            id="navbarScrollingDropdown"
            align="end"
            className="mx-2 my-2"
          >
            <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
            <NavDropdown.Item href="#action4">History</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="./login">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;
