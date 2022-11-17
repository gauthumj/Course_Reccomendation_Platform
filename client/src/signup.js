import Card from "react-bootstrap/Card";

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from "./duck.jpg";
import bg from "./Images/gradient.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function signupCard() {
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const signupURL = "http://localhost:3000/register";
  let navigate = useNavigate();
  const backimg = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const handleSignup = async () => {
    const userData = { email: mail, password: pwd, Fname: name };
    console.log("Hello");
    // fetch(signupURL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    await axios
      .post(signupURL, userData)
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        console.log(response);
        navigate("/");
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
  return (
    // <CardGroup className="position-absolute top-50 start-50 translate-middle w-50 h-75">
    //     <Card className="m-0 p-0">
    //         <Card.Body>
    //     <Card.Img className="mx-0 my-0 px-0 py-0" src="https://github.com/gauthumj/Course_Reccomendation_Platform/blob/main/client/src/duck.jpg?raw=true" />
    //     </Card.Body>
    //     </Card>
    <div className="" style={backimg}>
      <Card className="position-absolute top-50 start-50 translate-middle w-25">
        <Card.Body>
          <Card.Title style={titlestyle}>Sign Up</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                id="email"
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                placeholder="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
              <Form.Control
                type="password"
                placeholder="Re-Enter Password"
                id="repassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <br />
            <br />

            <Button
              onClick={() => {
                handleSignup();
              }}
              className="w-100"
              style={submitstyle}
              variant="warning"
            >
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {/* // </CardGroup> */}
    </div>
  );
}
export default signupCard;
