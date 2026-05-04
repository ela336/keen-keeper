import React from 'react';

const Cards = () => {
    return (
        <div className='bg-[#F8FAFC] p-6 '>
            <div className='flex items-center justify-evenly container mx-auto w-[90%]'>
                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'> 
                    <h3 className='font-semibold text-[32px]'>10</h3>
                    <p className='text-[18px] font-normal text-[#64748B]'>Friends</p>
                </div>

                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'>
                     <h3 className='font-semibold text-[32px]'>3</h3>
                    <p className='text-[18px] font-normal text-[#64748B]'>On Track</p>
                </div>

                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'> <h3 className='font-semibold text-[32px]'>6</h3>
                    <p className='text-[18px] font-normal text-[#64748B]'>Need Attention</p>
                    </div>

                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'> <h3 className='font-semibold text-[32px]'>12</h3>
                    <p className='text-[18px] font-normal text-[#64748B]'>Interactions This Month</p>
                    </div>
            </div>
            <hr className='mt-10 mx-auto w-[90%] text-[#c0c4c9]'></hr>
        </div>
    );
};

export default Cards;