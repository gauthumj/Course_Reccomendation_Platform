import React from "react";
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import SiteDetails from "./SiteDetails";
function Platform(props) {
  const platform = props.title;
  const src = props.link;
  const img = props.img;
  function CustomToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    return (
      <button
        type="button"
        style={{ backgroundColor: "lightblue" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <div>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Header>
          {/* <Card.Title>Skillshare</Card.Title> */}
          <img
            src={props.img}
            style={{ width: "100px", height: "50px" }}
          />{" "}
          <br /> <br />
          <CustomToggle eventKey={props.title}>Expand</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.title}>
          <Card.Body>
            {src
              ? src.map((course) => (
                  <SiteDetails
                    title={course.title}
                    description={course.description}
                    image={course.image}
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
