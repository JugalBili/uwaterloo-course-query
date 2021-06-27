import React, { useState, useEffect } from 'react';
import LocationListItem from './LocationListItem'
require("dotenv").config({ path: "../../.env" });
var KEY = process.env.REACT_APP_API_KEY;

const LocationList = () => {

    const [locations, setLocations] = useState(null);

    const fetchLocations = () => {
        fetch(
            'https://openapi.data.uwaterloo.ca/v3/Locations',
            {
                headers: {
                    'x-api-key': KEY,
                }
            }
        )
            .then((response) => response.json())
            .then((result => setLocations(result)));


    }

    useEffect(() => {
        fetchLocations();
    }, []);
    return (
        <>
            <h2>List of UW Buildings</h2>
            {locations && locations.map((location) => {
                if(location.parentBuildingCode != null){return <LocationListItem key={location.parentBuildingCode} location={location} />}
                else{return <LocationListItem key={location.buildingCode} location={location} />}
                
}) /*<LocationListItem key={location.buildingCode} location={location} />))*/

            }
        </>
    )
}

export default LocationList
