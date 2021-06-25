import React, {useState, useEffect} from 'react';
import LocationListItem from './LocationListItem'
const LocationList = () => {
    const [locations, setLocations] = useState(null);

    const fetchLocations  = () => {
        fetch(
            'https://openapi.data.uwaterloo.ca/v3/Locations'
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
           {locations && locations.map((locations) => (
               <LocationListItem key={location.buildingId} location={location} />
           ))

           }
        </>
    )
}

export default LocationList
