import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './nullstyles.css';
import './index.css';
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import './i18n';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

