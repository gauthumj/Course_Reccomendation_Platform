import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import bg from "./Images/gradient.webp";
import bboard from "./Images/download_upscaled.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import db from "./db";
function LoginCard() {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const loginURL = "http://localhost:3000/signin";
  let navigate = useNavigate();
  console.log(db.users);
  const handleLogin = async () => {
    console.log("Hello");
    const userData = { email: mail, password: pwd };
    // let flag = 0;
    // for (var i = 0; i < db.users.length; i++) {
    //   if (db.users[i].email === mail) {
    //     flag = 1;
    //     console.log("logged in");
    //     navigate("/");
    //   }
    // }
    // if (flag === 0) {
    //   console.log("Invalid Credentials");
    // }

    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/signin",
    //   data: {
    //     email: mail,
    //     password: pwd,
    //   },
    // })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.response.data);
    //   })
    //   .then((res) => {
    //     if (res.statusText === "OK") {
    //       navigate("/");
    //     }
    //   });

    await axios
      .post(loginURL, userData)
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      })
      .then((res) => {
        if (res.statusText === "OK") {
          console.log(res);
          navigate("/");
        }
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
                  onChange={(e) => setMail(e.target.value)}
                  style={formstyle}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
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
