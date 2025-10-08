import { Link } from "react-router";
import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
const AppsCard = ({ app }) => {
  const { id, image, title, downloads, ratings } = app;
  const totalStars = ratings.reduce(
    (sum, rating, i) => sum + (i + 1) * rating.count,
    0
  );
  const totalUsers = ratings.reduce((total, rating) => total + rating.count, 0);
  const averageRating = (totalStars / totalUsers).toFixed(1);

  // {
  //     "image": "https://www.flaticon.com/free-icon/mobile-app_5529337",
  //     "title": "TravelSphere",
  //     "companyName": "WanderWorks",
  //     "id": 8,
  //     "description": "Plan trips, explore destinations, and find local attractions with ease.",
  //     "size": 83.4,
  //     "reviews": 10300,
  //     "ratingAvg": 4.1,
  //     "downloads": 890000,
  //     "ratings": [
  //       { "name": "1 star", "count": 1000 },
  //       { "name": "2 star", "count": 800 },
  //       { "name": "3 star", "count": 1500 },
  //       { "name": "4 star", "count": 2800 },
  //       { "name": "5 star", "count": 4200 }
  //     ]
  //   },

  return (
    <Link to={`/app/${id}`}>
      <div className="bg-white p-4 rounded-md space-y-4 shadow hover:scale-102 cursor-pointer">
        <div className="bg-[#D9D9D9] rounded-xl">
          <img className="w-full h-[220px]" src={image} alt="" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center bg-[#F1F5E8] gap-2 px-3 py-1 rounded-md">
            <img className="w-4" src={downloadImage} alt="download iconImg" />
            <span className="text-[#00D390]">{downloads}</span>
          </div>
          <div className="flex items-center bg-[#FFF0E1] gap-2 px-3 py-1 rounded-md">
            <img className="w-4" src={ratingImage} alt="download iconImg" />
            <span className="text-[#FF8811]">{averageRating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
