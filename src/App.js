import React from "react";
// import ReactDOM from "react-dom/client";
import Hello from "./components/Hello";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import "./App.css";
/* Example */
import Jsx from "./components/jsx/Jsx";
import Rendering from "./components/RenderingElements/Rendering";
import Form from "./components/form/Form";
import A from "./components/LiftingStateUp/A";
import Accessibility from "./components/accessibility/Accessibility";
import Project1 from "./components/project/Project1";
import Composition from "./components/CompositionVsInheritance/Composition";
import ReactLazy from "./components/CodeSplitting/Reactlazy";
import Main from "./components/Context/Main";
import Error from "./components/errorBoundaries/Error";

function App() {
  return (
    <Router>
      <Navebar />
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-2 h-100">
            <Sidebar />
          </div>
          <div className="col-10 mainBox">
            <Routes>
              {/* Navbar */}
              <Route exact path="/" element={<Hello />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              {/* Sidebar */}
              <Route exact path="/home" element={<Hello />}></Route>
              <Route exact path="/" element={<Hello />}></Route>
              <Route exact path="/" element={<Hello />}></Route>

              {/* Examples */}

              <Route exact path="/project1" element={<Project1 />}></Route>
              <Route exact path="/jsx" element={<Jsx />}></Route>
              <Route
                exact
                path="/rendering-elements"
                element={<Rendering />}
              ></Route>
              <Route exact path="/form" element={<Form />}></Route>
              <Route exact path="/Lifting-State-Up" element={<A />}></Route>
              <Route
                exact
                path="/Composition-inheritance"
                element={<Composition />}
              ></Route>
              <Route
                exact
                path="/accessibility"
                element={<Accessibility />}
              ></Route>
              <Route
                exact
                path="/code-splitting"
                element={<ReactLazy />}
              ></Route>
              <Route exact path="/context/*" element={<Main />}></Route>
              <Route exact path="/error-boundaries" element={<Error />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
