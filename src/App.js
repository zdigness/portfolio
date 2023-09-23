import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Navigation from "./components/layouts/Navigation";
import Home from "./components/pages/HomePage";
import ContactSubmission from "./components/pages/ContactSubmission";

import "./App.css"

const router = createBrowserRouter([
  {
    path: "zolidigness.me/",
    element: <Navigation />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ]
  },
  {
    element: <ContactSubmission />,
    children: [
      {
        path: "zolidigness.me/contact-submission",
        element: <ContactSubmission />,
      },
    ]
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
