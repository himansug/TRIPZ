import React from "react";

const TripCard = (props) => {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img alt="trip image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TripCard;
