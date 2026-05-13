import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { fcontext } from '../Context/Friendcontext';




const Status = () => {
  const { activity, setActivity } = useContext(fcontext);
  console.log(activity);
  const call = activity.filter(item => item.action === 'Call').length;
  const text = activity.filter(item => item.action === 'Text').length;
  const video = activity.filter(item => item.action === 'Video').length;


  console.log(call, text, video);
  const data = [
    { name: 'Call', value: call, fill: '#0088FE' },
    { name: 'Text', value: text, fill: '#00C49F' },
    { name: 'Video', value: video, fill: '#FFBB28' },

  ];
  return (
    <>
    
      <div className='bg-[#F8FAFC] p-7'>
        <h2 className='text-3xl font-bold text-center' >Friendship Analytics</h2>
        {activity.length ==0 ?<div className='text-center my-4 text-[20px] text-black-300  bg-white p-4 shadow rounded-lg  border-[#a6acb1]  w-[65%] container mx-auto'>No interaction logged in</div>:
        <div className='my-4 flex flex-col p-7   justify-center bg-white rounded-lg shadow-md w-[60%] sm:w-[65%] container mx-auto '>
          <h3 className='text-sm sm:text-lg font-semibold'>By Interaction Type </h3>



          <PieChart style={{ margin: '0 auto', width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>

            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"

              cornerRadius="50%"
              fill="#8884d8"

              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
}
      </div>
    </>
  );
};

export default Status;