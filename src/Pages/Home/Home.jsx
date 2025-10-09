import React from "react";
import Banner from "../../Components/Banner/Banner";
import Counter from "../../Components/Counter/Counter";
import Apps from "../Apps/Apps";
import useAppsHook from "../../Hooks/useAppsHook";

const Home = () => {
  const { products} = useAppsHook();
  const trandingApps = products.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <Apps trandingApps={trandingApps}></Apps>
    </div>
  );
};

export default Home;
