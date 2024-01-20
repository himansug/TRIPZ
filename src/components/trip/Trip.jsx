import React from "react";
import "./style.css";
import TripCard from "./TripCard";
import { tripData } from "./TripData";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Gooogle Maps.</p>
      <div className="all-trip">
        {tripData.map((item) => (
          <TripCard
            image={item.image}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Trip;
