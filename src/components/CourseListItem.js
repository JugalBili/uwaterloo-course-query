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
    <div className="course">
      <a href="#" onClick={handleLoadDetails}>
        <h3>
          {course.subjectCode} {course.catalogNumber} - {course.title}
        </h3>
      </a>
      {/* <button onClick={handleDeleteCourse}>X</button> */}
      <a className="delete" onClick={handleDeleteCourse}>
        <svg
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="612.043px"
          height="612.043px"
          viewBox="0 0 612.043 612.043"
        >
          <g>
            <path
              d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
				L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
				c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
				c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"
            />
          </g>
        </svg>
      </a>
      {renderCourseDetails()}
    </div>
  );
}

CourseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
};

export default CourseListItem;
