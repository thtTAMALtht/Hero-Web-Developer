import React from "react";
import Container from "../../Components/Container/Container";
import clockImage from "../../assets/clock.png";
import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";

const AppDetails = () => {
  return (
    <div className="bg-[#F5F5F5] py-12">
      <Container>
        {/* install app */}
        <div className="grid grid-cols-12 gap-4 pb-8">
          <div className="col-span-2">
            <img src={clockImage} alt="" />
          </div>

          <div className="col-span-10 space-y-4">
            <div>
              <h3 className="font-bold text-3xl">
                SmPlan:ToDo List with Reminder
              </h3>
              <p className="tracking-wide text-[#627382]">
                Developed by
                <span className="text-[#7C44EA] ml-2">productive.io</span>
              </p>
            </div>
            <hr className="border-t border-[#C4C9CE]" />
            <div className="flex gap-12 text-center">
                <div className="flex flex-col items-center space-y-2">
                    <img className="w-6" src={downloadImage} alt="download image" />
                    <p className="text-xs text-[#627382]">Downloads</p>
                    <h5 className="font-bold text-4xl">8M</h5>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <img className="w-6" src={ratingImage} alt="rating image" />
                    <p className="text-xs text-[#627382]">Average Ratings</p>
                    <h5 className="font-bold text-4xl">4.9</h5>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <img className="w-6" src={reviewImage} alt="download image" />
                    <p className="text-xs text-[#627382]">Total Reviews</p>
                    <h5 className="font-bold text-4xl">54K</h5>
                </div>
            </div>
            <div>
                <button className="btn bg-[#00D390] text-white">Install Now (291 MB)</button>
            </div>
          </div>
        </div>
        <hr className="border-t border-[#C4C9CE]" />

        {/* rating chart  */}

        <div>
            <h3>Rating.................</h3>
        </div>

        <hr className="border-t border-[#C4C9CE]" />

        {/* description  */}
        <div className="pt-8">
            <h2 className="font-semibold text-2xl">Description</h2>
            <p className="text-[#627382]">This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.  
            </p>
        </div>
























      </Container>
    </div>
  );
};

export default AppDetails;
