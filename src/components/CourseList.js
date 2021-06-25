import React from "react";
import CourseListItem from "./CourseListItem.js";
import AddCourse from "./AddCourse.js";

require("dotenv").config({ path: "../../.env" });
var KEY = process.env.REACT_APP_API_KEY;
//console.log(KEY);

export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      keyId: 0,
      newDoctor: [],
    };
  }

  renderCourses() {
    console.log(this.state.courses);
    return this.state.courses.map((course) => (
      <CourseListItem
        key={this.state.keyId + 1}
        id={course.courseId}
        subject={course.subjectCode}
        catalog={course.catalogNumber}
        title={course.title}
      />
    ));
  }

  handleAddCourse(name) {
    name = name.replace(/\s/g, "");
    var nameArr = name.split(/(\d+)/);

    fetch(
      `https://openapi.data.uwaterloo.ca/v3/Courses/1219/${nameArr[0]}/${nameArr[1]}`,
      {
        headers: {
          "x-api-key": `${KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => this.setState({ newDoctor: result }));

    if (this.state.newDoctor == null) {
      console.err("Course Invalid");
    } else {
      const newCourseList = [...this.state.courses, this.state.newDoctor];
      this.setState({ courses: newCourseList });
    }
  }

  handelDeleteDoctor(id) {
    console.log(`TODO: Delete course with id ${id}`);
    const newCourseList = this.state.courses.filter(
      (course) => course.id !== id
    );
    this.setState({ courses: newCourseList });
  }

  render() {
    return (
      <div className="Courses">
        <h2>Course List</h2>
        <AddCourse onAddCourse={(name) => this.handleAddCourse(name)} />
        {this.renderCourses()}
      </div>
    );
  }
}
