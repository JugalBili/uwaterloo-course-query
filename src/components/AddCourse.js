import React, { useState } from "react";

const AddCourse = (props) => {
  const [courseName, setCourseName] = useState("");

  const handleChangeName = (event) => {
    setCourseName(event.target.value);
    // console.log(courseName);
  };

  const handleAddCourse = () => {
    console.log(courseName);
    if (courseName === "") {
      console.error("Please enter valid course. Cannot be ''.");
    } else {
      props.onAddCourse(courseName);
    }

    setCourseName(""); // Clears text field
  };

  return (
    <div className="input-field">
      <input id="input" type="text" value={courseName} onChange={handleChangeName} />
      <button id="button" onClick={handleAddCourse}> Search for Course</button>
    </div>
  );
};

export default AddCourse;
