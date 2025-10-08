import React from "react";
import Container from "../Container/Container";
import logoImage from "../../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <Container>
        <footer className="grid grid-cols-12 lg:gap-12 py-8 space-y-12 lg:space-y-0 text-center">
          <div className="col-span-12 lg:col-span-6 space-y-4 lg:border-r-1 border-gray-500">
            <Link to="/" className="flex items-center justify-center lg:justify-start gap-2">
              <img className="w-12" src={logoImage} alt="" />
              <span className="font-bold text-white text-xl">HERO.IO</span>
            </Link>
            <p className="lg:text-justify text-gray-300">
              We craft innovative apps designed to make everyday life
              simpler,smarte.<br className="hidden lg:block"></br>Our goal is to turn your ideas into
              digital experiences that truly make an impact.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:border-r-1 border-gray-500 text-gray-300">
            <ul className="space-y-4">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="#">ABOUT US</Link>
              </li>
              <li>
                <Link to="#">SERVICES</Link>
              </li>
              <li>
                <Link to="#">PORTFOLIO</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:border-r-1 border-gray-500 text-gray-300">
            <ul className="space-y-4">
              <li>
                <Link to="#">TEAM</Link>
              </li>
              <li>
                <Link to="#">SUPPORT</Link>
              </li>
              <li>
                <Link to="#">CAREER</Link>
              </li>
              <li>
                <Link to="#">BLOG</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2  text-gray-300 lg:flex flex-col justify-center items-end space-y-4">
            <h3 className="text-xl tracking-widest">Get in touch</h3>
            <ul className="flex justify-center gap-5 text-lg">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank">
                <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Container>
      <section className="text-center py-4 bg-[#1d2735]">
          <p className="text-white -tracking-tighter">
            &copy;2025 Hero-App-Developer - All Rights Reserved
          </p>
        </section>
    </div>
  );
};

export default Footer;
