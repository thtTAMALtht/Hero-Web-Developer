import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";


const InstalledCard = ({ item,handleRemove }) => {
  console.log(item);
  const { id, image, title, downloads,size, ratings} = item;

  const totalStars = ratings.reduce(
    (sum, rating, i) => sum + (i + 1) * rating.count,
    0
  );
  const totalUsers = ratings.reduce((total, rating) => total + rating.count, 0);
  const averageRating = (totalStars / totalUsers).toFixed(1);




  return (
    
      <div className="bg-white p-4 flex justify-between items-center rounded-md">
        <div className="flex items-center gap-4">
          <div className="bg-[#D9D9D9] p-2 rounded-xl">
            <img className="w-16 h-[60px]" src={image} alt="" />
          </div>
          <div className="space-y-2">
            <h3>{title}</h3>
            <div className="flex gap-4 ">
              <div className="flex items-center gap-1">
                <img className="w-4" src={downloadImage} alt="" />
                <span className="text-[#00D390]">{downloads}K</span>
              </div>
              <div className="flex items-center gap-1">
                <img className="w-4" src={ratingImage} alt="" />
                <span className="text-[#FF8811]">{averageRating}</span>
              </div>
              <div>
                <p className="text-[#627382]">{size} MB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={()=>handleRemove(id)} className="btn btn-sm bg-[#00D390] text-white">
            Uninstall
          </button>
        </div>
      </div>
  );
};

export default InstalledCard;
