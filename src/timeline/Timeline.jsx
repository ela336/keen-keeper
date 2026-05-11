import React from 'react';
import { useContext } from 'react';
import { fcontext } from '../Context/Friendcontext';
import { CiVideoOn } from "react-icons/ci";
import { IoMdText } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const Timeline = () => {
    const {activity, setActivity} =useContext(fcontext);
    console.log(activity);
    const today = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date());
    console.log(activity);
    return (
        <div className='bg-[#F8FAFC]'>

            <div className='container w-[88%] mx-auto space-y-4 py-6' >
            <h1 className='font-bold text-[48px]'>Timeline</h1>
           
  
  <select className='bg-[#F8FAFC]  text-[#8d9194] border border-[#a8aeb4] p-2 w-50' >
    <option>Filter timeline</option>
    <option>All</option>
    <option>On Track</option>
    <option>Almost Due</option>
    <option>Overdue</option>
  </select>
    
    <div className='  py-6'>

  {activity.map((item, index) => (
    <div
      key={index}
      className='flex items-center gap-2  p-2'
    >

      {item.action == "Call" && (
        <div className='flex items-center  gap-2 bg-white p-4 shadow rounded-btn w-full border-[#a6acb1]'>
         <div>
            <IoCallOutline className='w-8 h-8' />
            </div>
            <div>
        <p>
          <span className='font-bold'>{item.action} </span>
          with {item.name}
        </p>

        <p>{today}</p>
        </div>
      </div>
      )}

      {item.action == "Text" && (

          <div className='flex items-center  gap-2 bg-white p-4 shadow rounded-btn w-full border-[#a6acb1]'>
        
         <div>
            <IoMdText className='w-8 h-8' />
            </div>
            <div>
        <p>
          <span className='font-bold'>{item.action} </span>
          with {item.name}
        </p>

        <p>{today}</p>
      </div>
      </div>
      )}

      {item.action == "Video" && (
         <div className='flex items-center  gap-2 bg-white p-4 shadow rounded-btn w-full border-[#a6acb1]'>
         <div>
             <CiVideoOn className='w-8 h-8' />
             </div>
             <div>
        <p>
          <span className='font-bold'>{item.action} </span>
          with {item.name}
        </p>

        <p>{today}</p>
      </div>
      </div>
      )}

     

    </div>
  ))}

</div>




  </div>
  </div>


);
};

export default Timeline;