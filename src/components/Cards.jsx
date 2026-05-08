import React from 'react';
import { use } from 'react';
import { Link } from "react-router-dom";


const datapromise = fetch('/Friends.json').then(res=> res.json());


const Cards = () => {
    const friendsdata =use(datapromise);
    

    return (
        <>
        <div className='bg-[#F8FAFC] p-6 '>
            <div className='flex items-center justify-evenly container mx-auto w-[90%]'>
                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'> 
                    <h3 className='font-semibold text-[32px]'>{friendsdata.length}</h3>
                    <p className='text-[18px] font-normal text-[#64748B]'>Friends</p>
                </div>

                <div className='bg-white flex flex-col items-center justify-center w-70 py-3 rounded-lg shadow'>
                     <h3 className='font-semibold text-[32px]'>{friendsdata.filter(friend => friend.status === 'on-track').length}</h3>
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
          <div className='bg-[#F8FAFC] '>
           <h2 className='font-semibold text-[24px] ml-20 mb-4'>Your Friends</h2>
           <div className='grid grid-cols-4  gap-4 container mx-auto w-[88%] pb-16'>
            {friendsdata.map((friend,index)=> (
                <Link to={`/details/${friend.id}`} key={index} className='bg-white px-4 py-8 rounded-lg shadow-lg flex flex-col items-center  '>
                    <img src={friend.picture} alt={friend.name} className='w-20 h-20 rounded-full' />
                    
                    <h3 className='font-semibold text-[20px] '>{friend.name}</h3>
                    <div className='text-center space-y-2'>
                    <p className='text-[15px] font-normal text-[#64748B]'>{friend.days_since_contact}d ago</p>
                   {friend.tags.map((tag,index)=>(

                    <span key={index} className='bg-[#CBFADB] m-2 font-semibold text-[12px] rounded-xl text-[#64748B] px-2 py-1 '> {tag} </span>))}
                     {friend.status === 'overdue' && <div className='bg-[#EF4444] text-[12px] font-normal text-[#FFFFFF] m-2 py-1 rounded-xl w-[50%] mx-auto'>Overdue</div>} 
                     {friend.status ==='on-track' && <div className='bg-[#244D3F] text-[12px] font-normal text-[#FFFFFF] m-2  py-1 rounded-xl w-[50%] mx-auto' >On Track</div>}
                     {friend.status==="almost due" && <div className='bg-[#EFAD44] text-[12px] font-normal text-[#FFFFFF] m-2  py-1 rounded-xl w-[50%] mx-auto'>Almost Due</div>}
                    </div>
                </Link>
            ))}
           </div>
        
           
        </div>
        </>
    );
};

export default Cards;