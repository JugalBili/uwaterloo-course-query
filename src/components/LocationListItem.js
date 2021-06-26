import React, { useState } from 'react';

const LocationListItem = ({location}) => {
    const [showName, setShowName] = useState(false);

    const handleLoadLocations = () => {
        setShowName(!showName);
    }
    return (
        <div className = "location-buttons">
            <a onClick={handleLoadLocations} >
                <h3>
                {location.buildingName} 
                </h3>
            </a>
            {showName ?
                <ul>
                    <li>Building Code: {location.buildingCode}</li>
                    <li>Latitude: {location.latitude}</li>
                    <li>Longitude: {location.longitude}</li>
                </ul> :
            null
        }

        </div>
    );
};

export default LocationListItem;