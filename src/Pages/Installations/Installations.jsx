import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import InstalledCard from "./InstalledCard";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Installations = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const saveItems = JSON.parse(localStorage.getItem("installed"));
    if (saveItems) {
      setInstalledApp(saveItems);
    }
  }, []);

  const sortedItem = () => {
    if (sortOrder === "size-asc") {
      return [...installedApp].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "size-desc") {
      return [...installedApp].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApp;
    }
  };

  const handleRemove = (id) => {
    const savedItems = JSON.parse(localStorage.getItem("installed"));
    let updatedList = savedItems.filter((item) => item.id !== id);
    setInstalledApp(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast.warning("Uninstalled successfully")
  };

  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="text-center pt-12 pb-8 space-y-2">
          <h3 className="font-bold text-4xl text-[#001931]">
            Your Installed Apps
          </h3>
          <p className="text[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
          <hr className="mt-8 border-top-1 border-gray-200" />
        </div>

        {/* installed app design */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">
              <span>{installedApp.length}</span> Apps Found
            </h2>
          </div>

          {/* sort */}
          <div>
            <label className="w-full max-w-xs">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select"
              >
                <option value="none">Sort by Size</option>
                <option value="size-asc">Low-to-High</option>
                <option value="size-desc">High-to-Low</option>
              </select>
            </label>
          </div>
        </div>

        {/* installed appCard design */}

        {installedApp.length === 0 ? (
          <div className="text-center h-[365px] space-y-6">
            <h2 className="text-6xl font-bold pt-20">No app installed</h2>
            <div className='flex justify-center'>
                <Link to="/applications" className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] text-white ">Browse Apps !</Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-12">
            {sortedItem().map((items) => (
              <InstalledCard
                key={items.id}
                item={items}
                handleRemove={handleRemove}
              ></InstalledCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Installations;
