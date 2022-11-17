import React from "react";
import Card from "react-bootstrap/Card";

const titlestyle = {
  fontSize: "20px",
  fontWeight: "bold",
  paddingTop: "65px",
  alignItems: "center",
};
const imagestyle = {
  width: "150px",
  height: "150px",
  padding: "20px",
};
const linkstyle = {
  fontSize: "18px",
  paddingTop: "66px",
  position: "absolute",
  right: "25px",
};
function SiteDetails(props) {
  let link = "https://" + props.link;
  return (
    <div className="d-flex flex-row pt-3 pb-3">
      <div>
        <img style={imagestyle} src={props.image}></img>
      </div>
      <div style={titlestyle}>{props.title.toUpperCase()}</div>
      {/* <div>{props.description}</div> */}
      <div style={linkstyle}>
        <a href={link} target="_blank" rel="noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default SiteDetails;
