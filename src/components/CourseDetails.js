import React from "react";

const CourseDetails = ({ desc, require }) => {
  var requireArr = require.split(".");

  return (
    <div className="course-details">
      <p>{desc}</p>
      {requireArr.map((req) => (
        <p>{req}</p>
      ))}
    </div>
  );
};

export default CourseDetails;
