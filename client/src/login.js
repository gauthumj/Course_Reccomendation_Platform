import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import bg from "./Images/gradient.webp";
import bboard from "./Images/download_upscaled.jpg";
import axios from "axios";
function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginURL = "http://localhost:3000/login";
  const handleLogin = () => {
    console.log("Hello");
    useEffect(() => {
      axios
        .post(loginURL, null, { params: { email: email, password: password } })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const titlestyle = {
    color: "black",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  };
  const submitstyle = {
    width: "30%",
    alignItems: "center",
    marginTop: "20px",
  };
  const linkstyle = {
    padding: "40px 40px 40px 40px",
  };
  const bgimg = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const formstyle = {
    backgroundColor: "seashell",
  };
  return (
    <div style={bgimg}>
      <CardGroup className="position-absolute top-50 start-50 translate-middle w-50 h-75">
        <Card className="m-0 p-0 b-0">
          <Card.Body className="m-0 p-0">
            <Card.Img
              className="mx-0 my-0 px-0 py-0"
              src={bboard}
              style={{
                width: "385px",
                height: "565px",
              }}
            />
            <Card.ImgOverlay
              className="d-flex flex-column justify-content-center"
              style={{
                color: "Red",
                textAlign: "center",
              }}
            >
              <Card.Title
                style={{
                  fontFamily: "'Callie Chalk Font',sans-serif",
                  fontSize: "32px",
                }}
              >
                {" "}
                Course <br /> <br />
                Recommendation <br />
                <br /> Platform
              </Card.Title>
            </Card.ImgOverlay>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "lightsteelblue" }}>
          <Card.Body>
            <Card.Title style={titlestyle}>Login</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={formstyle}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  style={formstyle}
                />
              </Form.Group>
              <br />
              <br />

              <Button
                onClick={() => {
                  handleLogin();
                }}
                className="w-100"
                style={submitstyle}
                variant="warning"
                type="submit"
              >
                Login
              </Button>
              <br />
              <br />
              <Link style={linkstyle} to="/signup">
                Don't have an account? Sign up here!
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default LoginCard;
