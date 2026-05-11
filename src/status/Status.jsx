import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { fcontext } from '../Context/Friendcontext';
 

let call =0;
    let text =0;
    let video =0;

const Status = () => {
   const {activity, setActivity} =useContext(fcontext);
   console.log(activity);
   const numbers = ()=>{
    
    activity.forEach((items)=>{
      if(items.action=="Call"){
        call++;
      } else if(items.action=="Text"){
        text++;
      } else if(items.action=="Video"){
        video++;
      }
    })
   }
   numbers();
  const data = [
  { name: 'Call', value: call, fill: '#0088FE' },
  { name: 'Text', value: text, fill: '#00C49F' },
  { name: 'Video', value: video, fill: '#FFBB28' },
  
];
    return (
      <>
      <div className='bg-[#F8FAFC] p-7'>
      <h2 className='text-3xl font-bold ml-63' >Friendship Analytics</h2>
        <div className='my-4 flex flex-col p-7  justify-center bg-white rounded-lg shadow-md w-[65%] container mx-auto '>
           <h3 className='text-lg font-semibold'>By Interaction Type</h3>
         
            
            
            <PieChart style={{margin: '0 auto', width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
              
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
      <Legend/>
    </PieChart>
    </div>
    </div>
    </>
    );
};

export default Status;