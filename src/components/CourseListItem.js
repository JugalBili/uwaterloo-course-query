import React, { useState } from "react";
import PropTypes from "prop-types";
import CourseDetails from "./CourseDetails";

function CourseListItem({ id, course, onDeleteCourse }) {
  const [courseDetails, setCourseDetails] = useState(null);

  function handleDeleteCourse() {
    //console.log("TODO: delete course...");
    onDeleteCourse(id); //comes from the props, it was destuctured inline in the function callback definition
  }

  function handleLoadDetails() {
    setCourseDetails(course);
  }

  function renderCourseDetails() {
    if (!courseDetails) {
      return;
    }
    return (
      <CourseDetails
        desc={courseDetails.description}
        require={courseDetails.requirementsDescription}
      />
    );
  }

  return (
    <div>
      <a href="#" onClick={handleLoadDetails}>
        {course.subjectCode} {course.catalogNumber} - {course.title}
      </a>
      <button onClick={handleDeleteCourse}>X</button>
      {renderCourseDetails()}
    </div>
  );
}

CourseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  course: PropTypes.array.isRequired,
};

export default CourseListItem;
