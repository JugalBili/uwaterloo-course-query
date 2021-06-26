import React from "react";

const CourseDetails = ({ desc, require }) => {
  return (
    <>
      <p>{desc}</p>
      <br></br>
      <p>{require}</p>
    </>
  );
};

export default CourseDetails;
