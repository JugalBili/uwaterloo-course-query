import React, { useState } from 'react';

const LocationListItem = ({location}) => {

    const handleLoadLocations = () => {

    }
    return (
        <div>
            <a href='#' onClick={handleLoadLocations}>
                {location.buildingCode}
            </a>

        </div>
    );
};

export default LocationListItem;