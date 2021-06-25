import React, { useState } from 'react';

const LocationListItem = ({location}) => {
    const [showName, setShowName] = useState(false);

    const handleLoadLocations = () => {
        setShowName(!showName);
    }
    return (
        <div>
            <a href='#' onClick={handleLoadLocations}>
                {location.buildingName}
            </a>
            {showName ?
            <h3>{location.buildingCode}</h3> :
            null
        }

        </div>
    );
};

export default LocationListItem;