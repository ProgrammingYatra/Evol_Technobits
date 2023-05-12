import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import RecentlyUploaded from "./pages/RecentlyUploaded/RecentlyAdded";
import NavBar from "./component/navbar/NavBar";
import TopRated from "./pages/topRated/TopRated";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  <ToastContainer/>
  const Layout = () => {
    return (
      <div className="app">
        <NavBar />
        <Outlet />
      </div>
    );
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/recently-uploaded",
          element: <RecentlyUploaded/>
        },
        {
          path:"/top-rated",
          element: <TopRated/>
        },
       
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
