import React from "react";
import CourseListItem from "./CourseListItem.js";
import AddCourse from "./AddCourse.js";
import { toast } from "react-toastify";

require("dotenv").config({ path: "../../.env" });

export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      newCourse: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.newCourse !== this.state.newCourse) {
      /*console.log(this.state.newCourse);*/
      if (this.state.newCourse == null) {
        console.error("Course Invalid");
      } else {
        const newCourseList = [...this.state.courses, this.state.newCourse[0]];
        /*console.log(newCourseList);*/
        this.setState({ courses: newCourseList });
        /*console.log(this.state.courses);*/
      }
    }
  }

  renderCourses() {
    /*console.log(this.state.courses);*/
    return this.state.courses.map((course) => (
      <CourseListItem
        key={course.courseId}
        id={course.courseId}
        course={this.state.courses.find(
          (singleCourse) => singleCourse.courseId === course.courseId
        )}
        onDeleteCourse={(id) => this.handleDeleteDoctor(id)}
      />
    ));
  }

  handleAddCourse(name) {
    name = name.replace(/\s/g, "");
    var nameArr = name.split(/(\d+)/);
    nameArr.push("");

    if (
      !this.state.courses.find(
        (course) =>
          course.subjectCode === nameArr[0].toUpperCase() &&
          course.catalogNumber === nameArr[1] + nameArr[2]
      )
    ) {
      fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/Courses/1219/${nameArr[0]}/${
          nameArr[1] + nameArr[2]
        }`,
        {
          headers: {
            "x-api-key": `${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.length === 0) {
            console.error("Invalid Course Given");
            toast.error("Invalid Course Given.", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              toastId: 1,
            });
          } else {
            this.setState({ newCourse: result });
          }
        });
    } else {
      console.error("Duplicate Course Entered");
      toast.error("Duplicate Course Entered.", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        toastId: 2,
      });
    }
  }

  handleDeleteDoctor(id) {
    console.log(`TODO: Delete course with id ${id}`);
    const newCourseList = this.state.courses.filter(
      (course) => course.courseId !== id
    );
    this.setState({ courses: newCourseList });
  }

  render() {
    return (
      <div className="courses">
        <h2>Course List</h2>
        <AddCourse onAddCourse={(name) => this.handleAddCourse(name)} />
        {this.renderCourses()}
      </div>
    );
  }
}
