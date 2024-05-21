import React from 'react';
import ReactDOM from 'react-dom/client';
import css from "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import NineAm from './NineAm';
import Twoway from './Twoway';
import Api1 from './Api1';
import Api2 from './Api2';
import App3 from './App3';
import { createBrowserRouter, Link } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import { Content1 } from './Content1';
import { RouterProvider } from 'react-router';
import Error from './Error';
import Redux from './Redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
     
  },
  {
    path: "/:id",
    element: <Header/>
     
  },
  {
    path: "content",
    element: <Content/>
  },

  {
    path: "content1",
    element: <Content1/>
  },

  {
    path: "Api1",
    element: <Api1/>
  },
  

  {
    path: "*",
    element: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <App3/> */}
    <Redux/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
