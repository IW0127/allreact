import React, { Suspense } from "react";
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
// import Main from ("./components/Context/Main");
import Error from "./components/errorBoundaries/Error";
import ForwardingRefs from "./components/forwardingRefs/ForwardingRefs";
import Fragments from "./components/Fragments/Fragments";
import UseRefFunction from "./components/refsAndTheDOM/UseRef";
import StateHooks from "./components/stateHooks/StateHooks";

const Main = React.lazy(() => import("./components/Context/Main"));
function App() {
  return (
    <Router>
      <Navebar />
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-2 h-100">
            <Sidebar />
          </div>
          <div className="col-10 mainBox" id="demo1">
            <Routes>
              {/* Navbar */}
              <Route exact path="/" element={<Hello />} />
              <Route exact path="/about" element={<About />} />
              {/* Sidebar */}
              <Route exact path="/" element={<Hello />} />

              {/* Examples */}

              <Route exact path="/project1" element={<Project1 />} />
              <Route exact path="/jsx" element={<Jsx />} />
              <Route exact path="/rendering-elements" element={<Rendering />} />
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/Lifting-State-Up" element={<A />} />
              <Route
                exact
                path="/Composition-inheritance"
                element={<Composition />}
              />
              <Route exact path="/accessibility" element={<Accessibility />} />
              <Route exact path="/code-splitting" element={<ReactLazy />} />
              <Route
                exact
                path="/context/*"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Main />
                  </Suspense>
                }
              />
              <Route exact path="/error-boundaries" element={<Error />} />
              <Route
                exact
                path="/forwarding-refs"
                element={<ForwardingRefs />}
              />
              <Route exact path="/fragment" element={<Fragments />} />
              <Route
                exact
                path="/refs-and-the-DOM"
                element={<UseRefFunction />}
              />
              <Route exact path="/stateHooks" element={<StateHooks />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
