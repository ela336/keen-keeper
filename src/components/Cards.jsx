import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { HashLoader } from "react-spinners";




const Cards = () => {

    const [friends, setfriends] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {

        const fetchdata = async () => {
            const res = await fetch("/Friends.json");
            const friendsdata = await res.json();

            
              setfriends(friendsdata);
            setloading(false);
            

            console.log(friendsdata);
            
        };
        fetchdata();

    }, [])






    return (
        <>
            <div className='bg-[#F8FAFC] p-6 '>
                <div className=' grid gap-2 grid-cols-2   xl:grid-cols-4  container mx-auto w-[88%]'>
                    <div className='bg-white flex flex-col items-center justify-center w-full py-3 rounded-lg shadow'>
                        <h3 className='font-semibold text-[32px]'>{friends.length}</h3>
                        <p className='text-[18px] font-normal text-[#64748B] text-center'>Friends</p>
                    </div>

                    <div className='bg-white flex flex-col items-center justify-center w-full py-3 rounded-lg shadow'>
                        <h3 className='font-semibold text-[32px]'>{friends.filter(friend => friend.status === 'on-track').length}</h3>
                        <p className='text-[18px] font-normal text-[#64748B] text-center'>On Track</p>
                    </div>

                    <div className='bg-white flex flex-col items-center justify-center w-full py-3 rounded-lg shadow'> <h3 className='font-semibold text-[32px]'>{friends.filter(friend => friend.status === 'overdue').length}</h3>
                        <p className='text-[18px] font-normal text-center text-[#64748B]'>Need Attention</p>
                    </div>

                    <div className='bg-white flex flex-col items-center justify-center w-full py-3 rounded-lg shadow '> <h3 className='font-semibold text-[32px]'>{friends.filter(friend => friend.days_since_contact <= 30).length}</h3>
                        <p className='text-[18px] font-normal text-center text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
                <hr className='mt-10 mx-auto w-[90%] text-[#c0c4c9]'></hr>
            </div>

            <div className='bg-[#F8FAFC] '>
                <h2 className='font-semibold text-[24px] ml-20 mb-4'>Your Friends</h2>
                {loading ? <div className="flex justify-center items-center py-10">
                    <HashLoader size={60} color="#244D3F" />
                </div> : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4   gap-4 container mx-auto w-[88%] pb-16'>
                    {friends.map((friend, index) => (
                        <Link to={`/details/${friend.id}`} key={index} className='bg-white px-4 py-8 rounded-lg shadow-lg flex flex-col items-center w-full '>
                            <img src={friend.picture} alt={friend.name} className='w-20 h-20 rounded-full' />

                            <h3 className='font-semibold text-[20px] '>{friend.name}</h3>
                            <div className='text-center space-y-2'>
                                <p className='text-[15px] font-normal text-[#64748B]'>{friend.days_since_contact}d ago</p>
                                {friend.tags.map((tag, index) => (

                                    <span key={index} className='bg-[#CBFADB] m-2 font-semibold text-[12px] rounded-xl text-[#64748B] px-2 py-1  '> {tag} </span>))}
                                {friend.status === 'overdue' && <div className='bg-[#EF4444] text-[12px] font-normal text-[#FFFFFF] m-2 py-1 rounded-xl w-[50%] mx-auto mt-2'>Overdue</div>}
                                {friend.status === 'on-track' && <div className='bg-[#244D3F] text-[12px] font-normal text-[#FFFFFF] m-2  py-1 rounded-xl w-[50%] mx-auto mt-2' >On Track</div>}
                                {friend.status === "almost due" && <div className='bg-[#EFAD44] text-[12px] font-normal text-[#FFFFFF] m-2  py-1 rounded-xl w-[50%] mx-auto mt-2'>Almost Due</div>}
                            </div>
                        </Link>
                    ))}
                </div>}



            </div>
        </>
    );
};

export default Cards;