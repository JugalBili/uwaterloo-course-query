import React, { useState } from 'react';

const LocationListItem = ({location}) => {
    const [showName, setShowName] = useState(false);

    const handleLoadLocations = () => {
        setShowName(!showName);
    }
   // {if(location.parentBuildingName)}
    return (
        <div>
            <button onClick={handleLoadLocations}>
                {location.buildingName}
            </button>
            {showName ?
                <div>
                    <ul>
                        <li>Building Code: {location.buildingCode}</li>
                        <li>Latitude: {location.latitude}</li>
                        <li>Longitude: {location.longitude}</li>
                    </ul>
                </div> :
            null
        }

        </div>
    );
};

export default LocationListItem;