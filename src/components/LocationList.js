import React, {useState, useEffect} from 'react';
import LocationListItem from './LocationListItem'
const LocationList = () => {
    const apiKey = 'B705DBD8436C40549510F8704F02DDD6';
    const [locations, setLocations] = useState(null);

    const fetchLocations  = () => {
        fetch(
            'https://openapi.data.uwaterloo.ca/v3/Locations',
            {
                headers: {
                    'x-api-key': apiKey,
                }
            }
        )
        .then((response) => response.json())
        .then((result=>setLocations(result)));


    }

    useEffect(() => {
        fetchLocations();
    }, []);
    return (
        <>
           <h2>List of UW Buildings</h2> 
           {locations && locations.map((location) => (
               <LocationListItem key={location.buildingID} location={location} />
           ))

           }
        </>
    )
}

export default LocationList
