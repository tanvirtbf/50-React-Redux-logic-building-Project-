import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Accordian from "./components/accordian";
import Home from "./components/home/Home";
import RandomColor from "./components/random-color";
import SampleAccordian from "./components/sampleAccording";
import SampleRandomColor from "./components/sampleRandomColor";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/according-project",
        element: <Accordian />,
      },
      {
        path: "/random-color",
        element: <RandomColor />,
      },
      {
        path:'/sample-accordian',
        element:<SampleAccordian />,
      },
      {
        path:'/sample-random-color',
        element:<SampleRandomColor />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);