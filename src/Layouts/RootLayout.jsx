import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Container from "../Components/Container/Container";

const RootLayout = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>
          <div className="flex-1 py-5">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </Container>
    </div>
  );
};

export default RootLayout;
