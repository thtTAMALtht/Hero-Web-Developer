import React from 'react';
import errorImage from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-[#F5F5F5] space-y-3'>
            <img src={errorImage} alt="" />
            <h4 className='text-5xl font-bold'>Oops, page not found!</h4>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>
            <div className='flex gap-4'>
                <Link to="/" className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] text-white ">Home page !</Link>
                <Link to="/applications" className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] text-white ">Browse Apps !</Link>
            </div>
        </div>
    );
};

export default ErrorPage;