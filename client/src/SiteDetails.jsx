import React from "react";
import Card from "react-bootstrap/Card";
const titlestyle = {};
const imagestyle = {
  width: "100px",
  height: "100px",
};
function SiteDetails(props) {
  let link = "https://" + props.link;
  return (
    <div className="d-flex flex-row">
      <div>
        <img style={imagestyle} src={props.image}></img>
      </div>
      <div style={titlestyle}>{props.title}</div>
      {/* <div>{props.description}</div> */}
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          Go to site
        </a>
      </div>
    </div>
  );
}

export default SiteDetails;
