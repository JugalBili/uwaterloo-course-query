import React, { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList.js";
import LocationList from "./components/LocationList.js";
import Home from "./components/Home.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App(props) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      {/* <div className="header">
        <img src="/images/UW.png" className="App-logo" alt="UW logo" />
        <h1> UWaterloo Course Query</h1>
      </div> */}

      <Router>
        <div className="main-content">
          <nav className="header">
            <div className="title">
              <img src="./images/UW.png" className="App-logo" alt="UW logo" />
              {/* <img src="/images/UWENG.jpg" className="background-pic" alt="uwEngBuild"/> */}
              <h1> UWaterloo Course Query</h1>
              <a
                onClick={() => {
                  setOpen(!open);
                }}
                className="toggle-button"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </a>
            </div>
            <ul className="links-1">
              <li className="border-left">
                <Link to="/" className="links-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="links-1">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/locations" className="links-1">
                  Locations
                </Link>
              </li>
            </ul>
            {open ? (
              <ul>
                <li className="border-left">
                  <Link to="/" className="links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="links">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="links">
                    Locations
                  </Link>
                </li>
              </ul>
            ) : null}
          </nav>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/courses">
              <CourseList />
            </Route>
            <Route path="/locations">
              <LocationList />
            </Route>
            <body className="Home-section">
              <Route path="/">
                <Home />
              </Route>
            </body>
          </Switch>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            style={{ width: "fit-content" }}
          />
        </div>
      </Router>
    </>
  );
}

export default App;
