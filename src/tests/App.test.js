import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import AddCourse from "../components/AddCourse"
import LocationDropdown from "../components/LocationDropdown"

test("render h2 elements", () => {
  render(<Home />);

  expect(screen.getByText("Home Page")).toBeInTheDocument();
});

test("render p elements", () => {
  render(<Home />);

  expect(
    screen.getByText(
      "This webapp is to help students see the UW Courses and Locations which they are interested in."
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("To view course information, click on the 'Courses' tab")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "To view a list of waterloo campus locations, click on the 'Locations' tab"
    )
  ).toBeInTheDocument();
});

test("render building group p element", () => {
  render(<LocationDropdown />);

  expect(screen.getByText("Select a building group from the dropdown")).toBeInTheDocument();
});

test("check for input ID in AddCourse", () => {
  render(<AddCourse />);

  expect(document.getElementById("input")).toBeInTheDocument();
});
