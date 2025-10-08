import React from "react";
import Container from "../../Components/Container/Container";
import { CiSearch } from "react-icons/ci";
import useAppsHook from "../../Hooks/useAppsHook";
import AppsCard from "./AppsCard";
const AllApplication = () => {
  const { products, loading, error } = useAppsHook();

  return (
    <div className="bg-[#F5F5F5] py-16">
      <Container>
        <div className="text-center space-y-4">
          <h3 className="font-bold text-5xl">Our All Applications</h3>
          <p className="text-sm lg:text-lg text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between items-center py-4">
          <div>
            <h2 className="font-semibold text-xl">
              <span>({products.length})</span> Apps Found
            </h2>
          </div>

          <label className="relative">
            <input
              type="search"
              className="border border-gray-300 rounded-md px-6 py-1"
              placeholder="search Apps"
            />
            <span className="absolute left-1 top-[10px]">
              <CiSearch />
            </span>
          </label>
        </div>

        {/* card start*/}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <AppsCard key={product.id} app={product}></AppsCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllApplication;
