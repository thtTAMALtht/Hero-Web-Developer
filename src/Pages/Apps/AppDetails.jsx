import { useState } from "react";
import Container from "../../Components/Container/Container";
import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";
import { Link, useParams } from "react-router";
import useAppsHook from "../../Hooks/useAppsHook";
import appErrorImage from "../../assets/App-Error.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { products, loading } = useAppsHook();

  // Installed state localStorage check দিয়ে initialize
  const [installed, setInstalled] = useState(() => {
    const alreadyStorage = JSON.parse(localStorage.getItem("installed")) || [];
    return alreadyStorage.some((item) => item.id === Number(id));
  });

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const product = products.find((app) => app.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-12 bg-[#F5F5F5]">
        <img className="mx-auto" src={appErrorImage} alt="" />
        <p className="mt-4 text-gray-500 font-semibold">
          The app you are looking for does not exist.
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <Link
            to="/"
            className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] text-white "
          >
            Home page !
          </Link>
          <Link
            to="/applications"
            className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] text-white "
          >
            Browse Apps !
          </Link>
        </div>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratings,
    downloads,
  } = product;

  const handleInstalled = () => {
    const alreadyStorage = JSON.parse(localStorage.getItem("installed")) || [];

    // Duplicate check
    const duplicate = alreadyStorage.some((item) => item.id === product.id);
    if (duplicate) {
      return toast("Already added");
    }

    const updatedList = [...alreadyStorage, product];
    localStorage.setItem("installed", JSON.stringify(updatedList));
    setInstalled(true);
    toast.success("Installed Successfully");
  };

  // For chart
  const sortedRatings = [...ratings].sort((a, b) =>
    b.name.localeCompare(a.name)
  );

  // Average rating
  const totalStars = ratings.reduce(
    (sum, rating, i) => sum + (i + 1) * rating.count,
    0
  );
  const totalUsers = ratings.reduce((total, rating) => total + rating.count, 0);
  const averageRating = (totalStars / totalUsers).toFixed(1);

  return (
    <div className="bg-[#F5F5F5] py-12">
      <Container>
        {/* install app */}
        <div className="grid grid-cols-12 gap-4 pb-8">
          <div className="col-span-12 lg:col-span-2">
            <div className="lg:bg-[#D9D9D9] lg:p-2 rounded-xl">
              <img className="w-48 lg:w-full" src={image} alt="" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-10 space-y-4 ml-4">
            <div>
              <h3 className="font-bold text-3xl">{title}</h3>
              <p className="tracking-wide text-[#627382]">
                Developed by
                <span className="text-[#7C44EA] ml-2">{companyName}</span>
              </p>
            </div>
            <hr className="border-t border-[#C4C9CE]" />
            <div className="flex gap-12 text-center">
              <div className="flex flex-col items-center space-y-2">
                <img className="w-6" src={downloadImage} alt="download image" />
                <p className="text-xs text-[#627382]">Downloads</p>
                <h5 className="font-bold text-4xl">{downloads}K</h5>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img className="w-6" src={ratingImage} alt="rating image" />
                <p className="text-xs text-[#627382]">Average Ratings</p>
                <h5 className="font-bold text-4xl">{averageRating}</h5>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img className="w-6" src={reviewImage} alt="download image" />
                <p className="text-xs text-[#627382]">Total Reviews</p>
                <h5 className="font-bold text-4xl">{reviews}</h5>
              </div>
            </div>
            <div>
              <button
                disabled={installed}
                onClick={handleInstalled}
                className={`btn text-white ${
                  installed ? "!bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
                }`}
              >
                {installed ? "Already Installed" : `Install Now ( ${size} MB )`}
              </button>
            </div>
          </div>
        </div>
        <hr className="border-t border-[#C4C9CE]" />

        {/* rating chart  */}
        <div className="py-8">
          <h2 className="font-semibold text-2xl mb-4">Ratings</h2>

          <div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                layout="vertical"
                data={sortedRatings}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                barCategoryGap="25%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  opacity={0.1}
                />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip cursor={{ fill: "transparent" }} /> <Legend />
                <Bar
                  dataKey="count"
                  fill="#FF8811"
                  activeBar={{ fill: "#6B35E5", stroke: "none" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <hr className="border-t border-[#C4C9CE]" />

        {/* description  */}
        <div className="pt-8">
          <h2 className="font-semibold text-2xl">Description</h2>
          <p className="text-[#627382]">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
