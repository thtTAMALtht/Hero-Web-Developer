import React from 'react';
import Container from '../Container/Container';

const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-16'>
            <Container>
                <div>
                    <h3 className='text-center text-3xl lg:text-5xl font-bold text-white'>Trusted by Millions, Built for You</h3>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-12 text-center pt-12'>
                    <div className='space-y-4'>
                        <h5 className=' text-[#E6DAFB]'>Total Downloads</h5>
                        <h3 className='font-bold text-white text-6xl'>29.6M</h3>
                        <p className=' text-[#E6DAFB]'>21% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <h5 className=' text-[#E6DAFB]'>Total Reviews</h5>
                        <h3 className='font-bold text-white text-6xl'>906K</h3>
                        <p className=' text-[#E6DAFB]'>46% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <h5 className=' text-[#E6DAFB]'>Active Apps</h5>
                        <h3 className='font-bold text-white text-6xl'>132+</h3>
                        <p className=' text-[#E6DAFB]'>31 more will Launch</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Counter;