import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import { CiSearch } from "react-icons/ci";
import useAppsHook from "../../Hooks/useAppsHook";
import AppsCard from "./AppsCard";


const AllApplication = () => {
  const { products, loading} = useAppsHook();
  const [search,setSearch] = useState('');
  
  if(loading){
    return <p>Loading...........</p>
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
                onChange={(e)=>setSearch(e.target.value)}
              type="search"
              className="border border-[#6B36E6] rounded-md px-6 py-1"
              placeholder="search Apps"
            />
            <span className="absolute left-1 top-[10px]">
              <CiSearch />
            </span>
          </label>
        </div>

        {/* card start*/}

        {
            searchProducts.length === 0 
            ? 
            <div className="flex  justify-center items-center lg:py-[90px] rounded-lg">
                <h3 className="text-xl lg:text-6xl font-semi-bold text-center lg:leading-20">Unfortunately we could't find the app<br></br> you are looking for 🥺 !</h3>
            </div> 
            : 
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {searchProducts.map((product) => (
              <AppsCard key={product.id} app={product}></AppsCard>
            ))}
          </div>
        }
      </Container>
    </div>
  );
};

export default AllApplication;
