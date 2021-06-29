import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        This webapp is to help students see the UW Courses and Locations which
        they are interested in.
      </p>
      <p>To view course information, click on the 'Courses' tab</p>
      <p>
        To view a list of waterloo campus locations, click on the 'Locations'
        tab
      </p>
      <br></br>
      <br></br>
      <p>
        Data for courses and locations is being recieved from UWaterloo API,
        more info avout the API can be found on:
        <a href="https://uwaterloo.ca/api/" target="_blank">
          https://uwaterloo.ca/api/
        </a>
      </p>
    </div>
  );
};

export default Home;
