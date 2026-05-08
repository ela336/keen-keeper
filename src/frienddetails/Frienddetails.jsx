import React ,{ use, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBell } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { IoMdText } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { fcontext } from '../Context/Friendcontext';



const datapromise =fetch('/Friends.json').then(res=> res.json());


const Frienddetails = () => {
    const friends =use(datapromise);
    const {activity, setActivity} = useContext(fcontext);
    
    const {id}=useParams();
    const expectedFriend =friends.find( friend => friend.id ==id);
    

     
     

    
    return (
        <div className='bg-[#F8FAFC] px-35 py-10'>
            
                <div  className=' grid grid-rows-7 grid-cols-5 gap-3'>
                    <div className='bg-white row-span-4 col-span-2 shadow-lg text-center rounded-lg py-9 flex flex-col items-center justify-center'>
                       <img src={expectedFriend.picture} alt={expectedFriend.name} className='w-20 h-20 rounded-full' />
                       <h3 className='font-bold text-[20px] '>{expectedFriend.name}</h3>
                       
                       {expectedFriend.status === 'overdue' && <div className='bg-[#EF4444] text-[12px] font-normal text-[#FFFFFF] p-2 rounded-2xl mx-auto'>Overdue</div>} 
                     {expectedFriend.status ==='on-track' && <div className='bg-[#244D3F] text-[12px] font-normal text-[#FFFFFF]   p-2 rounded-2xl  mx-auto' >On Track</div>}
                     {expectedFriend.status==="almost due" && <div className='bg-[#EFAD44] text-[12px] font-normal text-[#FFFFFF]  p-2 rounded-2xl  mx-auto'>Almost Due</div>}
                     <div className='flex m-3'>
                      {expectedFriend.tags.map((tag,index)=>(

                    <span key={index} className='bg-[#CBFADB] m-1 font-semibold text-[12px] rounded-2xl text-[#64748B] px-2 py-1 '> {tag} </span>))}
                    </div>
                    <p className='text-[#64748B] font-medium text-[16px]'>"{expectedFriend.bio}"</p>
                    <p className='text-[#64748B] mt-1 text-[14px]'>Preferred: {expectedFriend.email}</p>
                    </div>
                    <div className='col-span-1 row-span-2 bg-white shadow-lg text-center rounded-btn flex flex-col items-center justify-center'>
                <h2 className='font-semibold text-[30px]'>{expectedFriend.days_since_contact}</h2>
                <p className='text-[18px] text-[#64748B]'>Day Since Contact</p>
            </div>

             <div className='col-span-1 row-span-2 bg-white shadow-lg text-center rounded-btn flex flex-col items-center justify-center'>
                <h2 className='font-semibold text-[30px]'>{expectedFriend.goal}</h2>
                <p className='text-[18px] text-[#64748B]'>Goal(Days)</p>
            </div>
            <div className='col-span-1 row-span-2 bg-white shadow-lg text-center rounded-btn flex flex-col items-center justify-center'>
                <h2 className='font-semibold text-[30px]'>{expectedFriend.next_due_date}</h2>
                <p className='text-[18px] text-[#64748B]'>Next Due</p>
            </div>
            <div className=' rounded-btn col-span-3 row-span-2 bg-white p-4 flex  justify-between shadow-lg'>
                <div className='flex flex-col justify-center justify-items-center'>
                    <h2 className='font-semibold text-[20px]'>Relationship Goal</h2>
                    <p className='text-[16px] text-[#64748B]'>Connect every <span className='font-bold text-black'>{expectedFriend.goal}  days </span></p>
                </div>
                <button className='btn '>Edit</button>
            </div>
                 <div className='row-span-3 col-span-2 bg-[#F8FAFC] space-y-6 '>
                <div className=' rounded-btn row-span-1 bg-white shadow-lg font-medium text-[16px] flex items-center justify-center gap-2 p-5 ' ><FaBell />Snooze 2 weeks</div>
                <div className=' rounded-btn  row-span-1 bg-white shadow-lg font-medium text-[16px] flex items-center justify-center gap-2 p-5' ><FaArchive />Archive</div>
                <div className=' rounded-btn row-span-1 bg-white shadow-lg font-medium text-[16px] flex items-center justify-center gap-2 p-5 text-red-700' ><MdDelete />Delete</div>
               </div>
             <div className=' rounded-btn col-span-3 row-span-3 bg-white shadow-lg p-3 '>
                <h2 className=' text-[20px] font-medium mb-3 '>Quick Check-In</h2>
                <div className='flex place-items-center justify-around'>
                    <button className='btn bg-[#F8FAFC] w-52 h-22 shadow-md text-[20px] font-medium flex flex-col'onClick={()=> setActivity([...activity, {name: expectedFriend.name, action: 'Call'}])} ><IoCallOutline className='w-xxl'/>Call</button>
                    <button className='btn bg-[#F8FAFC] w-52 h-22 shadow-md text-[20px] font-medium flex flex-col'onClick={()=> setActivity([...activity, {name: expectedFriend.name, action: 'Text'}])} ><IoMdText className='w-xxl'/>Text</button>
                    <button className='btn bg-[#F8FAFC] w-52 h-22 shadow-md text-[20px] font-medium flex flex-col'onClick={()=> setActivity([...activity, {name: expectedFriend.name, action: 'Video'}])} ><CiVideoOn className='w-xxl'/>Video</button>
                </div>
            </div>
                </div>
                
        

            
        </div>
    );
};


            

export default Frienddetails;