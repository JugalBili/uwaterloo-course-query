import React, { useState } from 'react';

const LocationListItem = ({location}) => {
    const [showName, setShowName] = useState(false);

    const handleLoadLocations = () => {
        setShowName(!showName);
    }
    return (
        <div>
            <a onClick={handleLoadLocations} className = "location-buttons">
                {location.buildingName} 
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