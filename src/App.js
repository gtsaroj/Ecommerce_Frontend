import React from "react";
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
    <div className="homePage">

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
          path: "products/:id", // Use "products/:id" instead of "/Products/:id"
          element: <Products />
        },
        {
          path: "product/:id", // Use "product/:id" instead of "/Product/:id"
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
