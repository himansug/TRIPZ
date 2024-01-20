import React from "react";
import "./style.css";
import DestinationSection from "./DestinationSection";
import { destinationData } from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      {destinationData.map((item) => (
        <DestinationSection
          heading={item.heading}
          description={item.description}
          image1={item.image1}
          image2={item.image2}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default Destination;
