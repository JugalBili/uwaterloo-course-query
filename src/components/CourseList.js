import React from "react";

export default class CourseList extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      keyId: 0,
    };
  }

  renderDoctors() {}

  render() {
    return <h2>Courses List</h2>;
  }
}
