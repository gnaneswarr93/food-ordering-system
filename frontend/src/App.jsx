import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx"; 
import Home from "./pages/Home.jsx"; 
import Food from "./pages/food.jsx"; 
// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />   
        <Outlet />   {/* Page content renders here */}
      </>
    ),
    children: [
      { path: "", element: <Home />},  // default home page
      { path: "about", element: <About /> },
     
      {path: "food", element: <Food />}, // food page
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
