import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center gap-8">
      <p className="text-3xl md:text-4xl text-[#6B36E6] tracking-[70px] font-semibold hidden lg:block">
        Loading....
      </p>
      <RingLoader color="#6B36E6" size={120} />
    </div>
  );
};

export default LoadingSpinner;
