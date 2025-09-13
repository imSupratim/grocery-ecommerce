import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/Seafood/Seafood";
import Allproducts from "./components/Allproducts/Allproducts";
import Layout from "./components/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <Seafood />,
        },
        {
          path: "/allproducts",
          element: <Allproducts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
