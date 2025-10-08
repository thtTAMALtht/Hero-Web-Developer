import React from "react";
import googlePlayImage from "../../assets/googlePlay.png";
import appStoreImage from "../../assets/appStore.png";
import bannerImg from "../../assets/hero.png";
import Container from "../Container/Container";


const Banner = () => {
  return (
    <div className="bg-[#F5F5F5] pt-16">
      <Container>
        <div className="text-center space-y-8">
          <h3 className="font-bold text-4xl lg:text-7xl">
            We Build<br className="hidden lg:block"></br> <span className="text-[#8452E9] mx-2 lg:mx-4">Productive</span>
            Apps
          </h3>
          <p className="text-[#627382]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.<br className="hidden lg:block"></br> Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              className=" btn btn-outline border-[#D2D2D2] hover:border-[#8452E9] focus:outline-none bg-transparent w-[170px] h-[45px]"
            >
              <img src={googlePlayImage} alt="google play" />
              <span>Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="btn btn-outline border-[#D2D2D2] hover:border-[#8452E9] focus:outline-none bg-transparent  w-[170px] h-[45px]"
            >
              <img src={appStoreImage} alt="google play" />
              <span>App Store</span>
            </a>
          </div>
            {/* banner image */}
          
            <div className="flex justify-center">
                <img src={bannerImg} alt="banner image" />
            </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Banner;
