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

 
  return (
    <Link to={`/app/${id}`}>
      <div className="bg-white p-4 rounded-md space-y-4 shadow hover:scale-102 cursor-pointer">
        <div className="">
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
