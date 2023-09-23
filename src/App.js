import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Route, Routes} from "react-router-dom";

import Navigation from "./components/layouts/nav";
import Home from "./components/pages/HomePage";
import ContactSubmission from "./components/pages/ContactSubmission";

import "./App.css"

function App() {
  return (
    // create routes for each page
    // 'children' are nested below another route (navbar example)
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route exact path="/" element={<Home />}/>
      </Route>
      <Route exact path="/contact-submission" element={<ContactSubmission />}/>
    </Routes>
  );
}

export default App;
