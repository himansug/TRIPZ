import React from "react";

const DestinationSection = (props) => {
  return (
    <div>
      <div className={props.className}>
        <div className="description-text">
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
        </div>
        <div className="description-image">
          <img alt="image" src={props.image1} />
          <img alt="image" src={props.image2} />
        </div>
      </div>
    </div>
  );
};

export default DestinationSection;
