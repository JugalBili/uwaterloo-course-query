import React, { useState, useRef } from "react";

const LocationDropdown = ({ onLocationChange }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const [selectedValue, setSelectedValue] = useState("select");

  function handleLocationChange(event) {
    setSelectedValue(event.target.value);
    onLocationChange();
  }

  return (
    <div className="location-select">
      <select
        name="location-type"
        id="location-type"
        value={selectedValue}
        onChange={handleLocationChange}
      >
        <option value="select" selected hidden disabled>
          Select Type
        </option>
        <option value="null">Academic</option>
        <option value="CGR">CGR</option>
        <option value="CLN">CLN</option>
        <option value="CLV">CLV</option>
        <option value="MKV">MKV</option>
        <option value="REN">REN</option>
        <option value="REV">REV</option>
        <option value="STJ">STJ</option>
        <option value="STP">STP</option>
        <option value="UWP">UWP</option>
        <option value="V1">V1</option>
      </select>
    </div>
  );
};

export default LocationDropdown;
