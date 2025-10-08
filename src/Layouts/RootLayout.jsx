import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";


const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 bg-[#F5F5F5]">
          {navigation.state === "loading" ? (
            <LoadingSpinner />
          ) : (
            <Outlet />
          )}
        </div>
        <Footer></Footer>
      </div>
     <ToastContainer />
    </div>
  );
};

export default RootLayout;
