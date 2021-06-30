import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AddCourse = (props) => {
  const [courseName, setCourseName] = useState("");

  const handleChangeName = (event) => {
    setCourseName(event.target.value);
    //console.log(courseName);
  };

  const handleAddCourse = () => {
    /*console.log(courseName);*/
    if (courseName === "") {
      console.error("Please enter valid course. Cannot be ''.");
      toast.error("Please enter valid course. Cannot be ' '.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        toastId: 3,
      });
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
        placeholder="Enter Coursename e.g. CS136"
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
