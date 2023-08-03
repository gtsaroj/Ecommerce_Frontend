import React from "react";
import "./App.scss";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const Layout = () => {
  return (
    <div className="App">

      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/Products:id",
          element: <Products />
        },
        {
          path: "/Product:id",
          element: <Product />
        },
        {
          path: "/",
          element: <Home />
        },
      ]
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
