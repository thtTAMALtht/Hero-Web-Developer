import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import { CiSearch } from "react-icons/ci";
import useAppsHook from "../../Hooks/useAppsHook";
import AppsCard from "./AppsCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const AllApplication = () => {
  const { products, loading } = useAppsHook();
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    if (search.trim() !== "") {
      setSearching(true);
      const timer = setTimeout(() => {
        setSearching(false);
      }, 500); // টাইপ শেষ হবার 0.5s পরে spinner বন্ধ হবে

      return () => clearTimeout(timer);
    } else {
      setSearching(false);
    }
  }, [search]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const searchCondition = search
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .split(",")
    .join("");

  const searchProducts = searchCondition
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchCondition)
      )
    : products;

  return (
    <div className="bg-[#F5F5F5] py-16">
      <Container>
        <div className="text-center space-y-4">
          <h3 className="font-bold text-5xl">Our All Applications</h3>
          <p className="text-sm lg:text-lg text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between items-center py-4 space-y-4 lg:space-y-0">
          <div>
            <h2 className="font-semibold text-xl">
              <span>({searchProducts.length})</span> Apps Found
            </h2>
          </div>
          {/* search */}
          <label className="relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="border border-[#6B36E6] rounded-md px-6 py-1"
              placeholder="search Apps"
            />
            <span className="absolute left-1 top-[10px]">
              <CiSearch />
            </span>
          </label>
        </div>

        {searching ? (
          <div className="flex justify-center items-center lg:min-h-[70vh]">
            <LoadingSpinner />
          </div>
        ) : searchProducts.length === 0 ? (
          <div className="flex justify-center items-center lg:min-h-[65vh] rounded-lg">
            <h3 className="text-xl lg:text-6xl font-semibold text-center leading-snug">
              Unfortunately we couldn't find the app
              <br /> you are looking for 🥺 !
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:min-h-[80vh]">
            {searchProducts.map((product) => (
              <AppsCard key={product.id} app={product} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllApplication;
