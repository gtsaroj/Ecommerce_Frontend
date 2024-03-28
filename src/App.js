import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Components/Cart/Cart";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-w-[100vw]  ">
      <div className="w-full h-full max-w-[1500px] flex flex-col justify-center items-center ">
        <div className=" py-5 z-50 w-full">
          <Navbar />
        </div>
        <div className="w-full">
          <PrivateRoute />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export const App = () => {
  // persistor.purge();
  const [ShowContent, SetShowContent] = useState(true);
  const auth = useSelector((state) => state.root.auth);

  useEffect(() => {
    auth.success ? SetShowContent(true) : SetShowContent(false);
  }, [auth]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={ShowContent ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={ShowContent ? <Navigate to={"/"} /> : <Register />}
        />
        {/* <Route
            path="forgot-password"
            element={ShowContent ? <Navigate to={"/"} /> : <ForgotPassword />}
          /> */}
        <Route
          path="/"
          element={ShowContent ? <PrivateRoute /> : <Navigate to={"/login"} />}
        >
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:tag" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />

            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
