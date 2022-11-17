import React, { useState, useContext, createContext } from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import SiteDetails from "./SiteDetails";
import Button from "react-bootstrap/Button";
import udemysamp from "./Images/udemy_sample.png";
import skillsharesamp from "./Images/skillshare_sample.png";
function Platform(props) {
  const platform = props.title;
  const src = props.link;
  const img = props.img;

  const [open, setOpen] = useState(false);
  const AccordionContext = createContext(null);
  const btnstyle = {
    width: "10%",
    alignItems: "center",
    marginTop: "10px",
  };
  function CustomToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    return (
      <Button
        type="button"
        style={btnstyle}
        variant="info"
        onClick={decoratedOnClick}
        className="position-absolute start-50"
      >
        {open ? "Collapse" : "Expand"}
      </Button>
    );
  }
  function imgHandler() {
    if (platform === "0") {
      return udemysamp;
    } else if (platform === "2") {
      return skillsharesamp;
    } else {
      return null;
    }
  }
  return (
    <div className="position-relative pb-5 container-fluid">
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Header>
          {/* <Card.Title>Skillshare</Card.Title> */}
          <img
            src={props.img}
            style={{ width: "100px", height: "75px", alignItems: "center" }}
          />{" "}
          <CustomToggle eventKey={props.title}></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.title}>
          <Card.Body>
            {src
              ? src.map((course) => (
                  <SiteDetails
                    title={course.title}
                    description={course.description}
                    image={imgHandler() ? imgHandler() : course.image}
                    link={course.link}
                  />
                ))
              : null}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}

export default Platform;
