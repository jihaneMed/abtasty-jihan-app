import React from "react";
import { DESTINATIONS } from "./constants";
import { Link } from "react-router-dom";

function Stories() {

  return (
    <div className="Stories">
      <h3>Top Destinations</h3>
      {DESTINATIONS.map(story => {
        const { id, image, title } = story;
        return (
          <div key={id}>
            <img src={image} alt={title} />
            <div>
              {title}
            </div>
            <Link to='/booking'>
              <button type='button'>Go To Booking</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
