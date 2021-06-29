import React, { useState, useEffect } from "react";
import LocationListItem from "./LocationListItem";
import LocationDropdown from "./LocationDropdown";

require("dotenv").config({ path: "../../.env" });
var groupBy = require("lodash.groupby");
const LocationList = () => {
  const [locations, setLocations] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(locations);

  const fetchLocations = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/Locations`, {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((result) => setLocations(result));
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  var grouped = groupBy(locations, function (loc) {
    return loc.parentBuildingCode;
  });
  //var nullCode = grouped[null];
  //console.log(nullCode);
  console.log(grouped);

  const handleLocationChange = () => {
    var index = document.getElementById("location-type").value;
    /*console.log(index);*/
    if (index === "CGR") {
      setSelectedLocations(grouped.CGR);
    } else if (index === "CLN") {
      setSelectedLocations(grouped.CLN);
    } else if (index === "CLV") {
      setSelectedLocations(grouped.CLV);
    } else if (index === "MKV") {
      setSelectedLocations(grouped.MKV);
    } else if (index === "REN") {
      setSelectedLocations(grouped.REN);
    } else if (index === "REV") {
      setSelectedLocations(grouped.REV);
    } else if (index === "STJ") {
      setSelectedLocations(grouped.STJ);
    } else if (index === "STP") {
      setSelectedLocations(grouped.STP);
    } else if (index === "UWP") {
      setSelectedLocations(grouped.UWP);
    } else if (index === "V1") {
      setSelectedLocations(grouped.V1);
    } else if (index === "null") {
      setSelectedLocations(grouped.null);
    }
  };

  return (
    <div className="locations">
      <h2 className="Location-Heading">List of UW Buildings</h2>
      <LocationDropdown
        onLocationChange={(index) => {
          handleLocationChange();
        }}
      />
      {selectedLocations &&
        selectedLocations.map((location) => (
          <LocationListItem key={location.buildingId} location={location} />
        ))}
    </div>
  );
};

export default LocationList;
