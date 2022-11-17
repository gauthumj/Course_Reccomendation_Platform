import "./home.css";
import React, { useState, useContext, useEffect } from "react";
import Navbarmain from "./Navbar";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import edubg from "./Images/bg_medium.jpg";
import { AccordionContext, CardGroup } from "react-bootstrap";
import udacity from "./Platforms/udacity";
import udemy from "./Platforms/udemy";
import skillshare from "./Platforms/skillshare";
import udeimg from "./Images/Udemy_logo.svg.png";
import sklimg from "./Images/skillshare.png";
import udaimg from "./Images/Udacity.webp";
import SiteDetails from "./SiteDetails";
import Platform from "./Platform";
import axios from "axios";

const homestyle = {
  backgroundImage: `url(${edubg})`,
  height: "50vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  paddingBottom: "10px",
  textAlign: "bottom",
};
const coursestyle = {
  paddingTop: "10px",
  backgroundColor: "lightgrey",
};
const groups = {};
const cardstyle = {
  // width: "18rem",
  // height: "18rem",
  // margin: "10px",
};

function Home() {
  const udeServerURL = "http://127.0.0.1:5000?platform=udemy";
  const udaServerURL = "http://127.0.0.1:5000?platform=udacity";
  const sklServerURL = "http://127.0.0.1:5000?platform=skillshare";

  let exp = "Expand";
  let col = "Collapse";
  const [udedata, setUdedata] = useState(null);
  const [udadata, setUdadata] = useState(null);
  const [skldata, setSkldata] = useState(null);

  useEffect(() => {
    const loadUdemy = async () => {
      await axios.get(udeServerURL).then((response) => {
        setUdedata(response.data);
        console.log("success1");
      });
    };

    const loadUdacity = async () => {
      await axios.get(udaServerURL).then((response) => {
        setUdadata(response.data);
        console.log("success2");
      });
    };

    const loadSklsh = async () => {
      await axios.get(sklServerURL).then((response) => {
        setSkldata(response.data);
        console.log("success3");
      });
    };
    loadUdemy();
    loadSklsh();
    loadUdacity();
  }, []);
  const l = [
    {
      title: "0",
      link: udedata,
      img:
        "https://raw.githubusercontent.com/gauthumj/Course_Reccomendation_Platform/main/client/src/Images/Udemy_logo.svg.png",
    },
    {
      title: "1",
      link: udadata,
      img:
        "https://raw.githubusercontent.com/gauthumj/Course_Reccomendation_Platform/main/client/src/Images/Udacity_crop.jpg",
    },
    {
      title: "2",
      link: skldata,
      img:
        "https://raw.githubusercontent.com/gauthumj/Course_Reccomendation_Platform/main/client/src/Images/skillshare.png",
    },
  ];
  return (
    <>
      <div>
        <Navbarmain />
      </div>
      <div className="Home position-relative" style={homestyle}>
        {/* <header className="Home-header">
                    <p>
                        This is the home page.
                    </p>
                </header> */}
        <h2
          className="position-absolute bottom-0 pb-2"
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            color: "black",
            paddingLeft: "65px",
          }}
        >
          {" "}
          Let us learn something new{" "}
        </h2>
        <br />
      </div>

      <div className="courses ps-3" style={coursestyle}>
        <h2>Platforms</h2>
        {/* <CardGroup style={groups}> */}
        <br />
        <Accordion className="pe-5 ps-5 pb-5">
          {l.map((platform) => {
            return (
              <Platform
                title={platform.title}
                link={platform.link}
                img={platform.img}
              />
            );
          })}
        </Accordion>
        {/* <Card
            style={cardstyle}
            onClick={() => {
              setUda(false);
              setUde(false);
              setSklsh(true);
            }}
          >
            <Card.Img variant="top" src="holder.js/100px160" />

            <Card.Body>
              <Card.Title>Skillshare</Card.Title>
              <Card.Text> Lorem Ipsum </Card.Text>
            </Card.Body>
          </Card> */}
        {/* </CardGroup> */}
        {/* <div
          className="Udacity"
          style={{ visibility: Uda ? "visible" : "hidden" }}
        ></div>
        <div
          className="Udemy"
          style={{ visibility: Ude ? "visible" : "hidden" }}
        >
          {udemy
            ? udemy.map((course) => (
                <SiteDetails
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  link={course.link}
                />
              ))
            : null}
        </div>
        <div
          className="Skillshare"
          style={{ visibility: Sklsh ? "visible" : "hidden" }}
        >
          {skillshare
            ? skillshare.map((course) => (
                <SiteDetails
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  link={course.link}
                />
              ))
            : null}
        </div> */}
      </div>
    </>
  );
}

export default Home;
