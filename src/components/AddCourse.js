import React, { useState, useEffect } from "react";

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddCourse();
    }
  };

  return (
    <div className="input-field">
      <input
        id="input"
        type="text"
        value={courseName}
        onChange={handleChangeName}
        onKeyPress={handleKeyDown}
      />
      <button id="button" onClick={handleAddCourse}>
        Add Course
      </button>
    </div>
  );
};

export default AddCourse;
