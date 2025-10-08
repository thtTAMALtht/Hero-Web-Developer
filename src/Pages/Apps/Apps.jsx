import React from "react";
import Container from "../../Components/Container/Container";
import { Link } from "react-router";
import AppsCard from "./AppsCard";

const Apps = ({trandingApps}) => {

  return (
    <div className="bg-[#F5F5F5] py-20">
      <Container>
        <div className="text-center space-y-4 pb-8">
          <h2 className="font-bold text-5xl text-[#001931]">Trending Apps</h2>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* card start*/}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {
                trandingApps.map(app=><AppsCard key={app.id} app={app}></AppsCard>)
            }
        </div>
        
        





        <div className="text-center pt-10">
          <Link to="/applications" className=" btn px-8 py-4 text-white bg-gradient-to-r from-[#6933E5] to-[#995CF1]">
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Apps;
