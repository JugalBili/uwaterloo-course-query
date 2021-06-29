import React, { useState, useEffect } from "react";

const AddCourse = (props) => {
  const [courseName, setCourseName] = useState("");

  const handleChangeName = (event) => {
    setCourseName(event.target.value);
    //console.log(courseName);
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

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddCourse();
    }
  };

  return (
    <div className="input-field">
      <input
        className="field"
        id="input"
        type="text"
<<<<<<< HEAD
        placeholder="Enter Coursename e.g. CS136"
=======
        placeholder = "Enter Coursename e.g. CS136"
>>>>>>> 1bcd4c7b2ea026cb1331e2c91d9997fc28a3da2b
        value={courseName}
        onChange={handleChangeName}
        onKeyPress={_handleKeyDown}
      />
      <button id="button" onClick={handleAddCourse}>
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
