import React, { useState } from "react";

const LocationListItem = ({ location }) => {
  const [showName, setShowName] = useState(false);

  const handleLoadLocations = () => {
    setShowName(!showName);
  };
  return (
    <div className="location-buttons">
      <a onClick={handleLoadLocations}>
        <h3>{location.buildingName}</h3>
      </a>
      {showName ? (
        <div className="location-details">
          <ul>
            <li className="lists">Building Code: {location.buildingCode}</li>
            <li className="lists">Latitude: {location.latitude}</li>
            <li className="lists">Longitude: {location.longitude}</li>
          </ul>
        </div>
      ) : null }
    </div>
  );
};

export default LocationListItem;
