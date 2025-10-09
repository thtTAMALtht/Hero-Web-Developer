import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useAppsHook from "../Hooks/useAppsHook";


const RootLayout = () => {
 
const {loading} = useAppsHook();
  
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }


  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 bg-[#F5F5F5]">
            <Outlet />
        </div>
        <Footer></Footer>
      </div>
     <ToastContainer />
    </div>
  );
};

export default RootLayout;
