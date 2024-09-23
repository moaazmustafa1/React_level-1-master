import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from"./App"
import Three from './pages/three';
import Two from './pages/two';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>sorry</h1>
  },
  {
    path: "/three",
    element: <Three/>
  },
  {
    path: "/two",
    element: <Two/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


