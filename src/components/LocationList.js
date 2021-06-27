import React, { useState, useEffect } from "react";
import LocationListItem from "./LocationListItem";
import LocationDropdown from "./LocationDropdown";

require("dotenv").config({ path: "../../.env" });
var KEY = process.env.REACT_APP_API_KEY;
var groupBy = require("lodash.groupby");
const LocationList = () => {
  const [locations, setLocations] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState(null);
  setSelectedLocations(locations);
  var grouped = null;
  console.log("called again");

  const fetchLocations = () => {
    fetch("https://openapi.data.uwaterloo.ca/v3/Locations", {
      headers: {
        "x-api-key": KEY,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setLocations(result);
        groupBy(locations, function (loc) {
          return loc.parentBuildingCode;
        });
      });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  /*
  var grouped = groupBy(locations, function (loc) {
    return loc.parentBuildingCode;
  });
  var nullCode = grouped[null];
  console.log(nullCode);
  console.log(grouped);
  */
  /*
  const handleLocationChange = (index) => {
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
*/
  return (
    <div className="locations">
      <h2 className="Location-Heading">List of UW Buildings</h2>
      <LocationDropdown
        onLocationChange={(index) => {
          this.handleLocationChange(index);
        }}
      />
      {locations &&
        locations.map((location) => (
          <LocationListItem key={location.buildingID} location={location} />
        ))}
    </div>
  );
};

export default LocationList;
