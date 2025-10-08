import React from "react";
import Container from "../../Components/Container/Container";
import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";

const Installations = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="text-center py-16 space-y-2">
          <h3 className="font-bold text-4xl text-[#001931]">
            Your Installed Apps
          </h3>
          <p className="text[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* installed app design */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">
              <span>1</span> Apps Found
            </h2>
          </div>
        {/* sort */}
          <div>
            <label className="w-full max-w-xs">
              <select className="select">
                <option value="none">Sort by Size</option>
                <option value="size-asc">Low-to-High</option>
                <option value="size-desc">High &gt; Low</option>
              </select>
            </label>
          </div>
        </div>

        {/* installed appCard design */}

        <div className="space-y-4 py-10">
          <div className="bg-white p-4 flex justify-between items-center rounded-md">
            <div className="flex items-center gap-4">
              <div className="bg-[#D9D9D9] p-5 rounded-xl">
                <img className="w-8" src={ratingImage} alt="" />
              </div>
              <div className="space-y-2">
                <h3>Forest: Focus for Productivity</h3>
                <div className="flex gap-4 ">
                  <div className="flex items-center gap-1">
                    <img className="w-4" src={downloadImage} alt="" />
                    <span className="text-[#00D390]">9M</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-4" src={ratingImage} alt="" />
                    <span className="text-[#FF8811]">5</span>
                  </div>
                  <div>
                    <p className="text-[#627382]">258 MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-sm bg-[#00D390] text-white">
                Uninstall
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installations;
