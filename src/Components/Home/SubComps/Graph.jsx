import React from 'react';

const Graph = () => {

  const weeklySalesData = [
    { week: 1, sales: 1200 },
    { week: 2, sales: 1500 },
    { week: 3, sales: -800 },
    { week: 4, sales: 2000 },
    { week: 5, sales: 2500 },
    { week: 6, sales: 2500 },
    { week: 7, sales: -1200 },
  ]

  return (
    <div className='p-4 space-y-4 w-2/3 select-none'>
      <p className='font-semibold text-[12px]'>Sales Reports</p>
      <div className='flex gap-4 justify-end items-end'>
        {weeklySalesData.map((item, i) => {
          const isLoss = item.sales < 0;
          const barColor = isLoss ? 'bg-violet-400' : 'bg-violet-200';
          return (
            <div key={i} style={{height:`${(Math.abs(item.sales) /8) }px`}} className={`hover:scale-105 duration-500 ring-black/5 shadow-md rounded-lg relative w-full ${barColor}`}>
             <p className='font-semibold text-[10px] text-gray-200  -top-4 absolute left-8'>{item.sales}</p>
            </div>
          );
        })}
      </div>
      <div className='flex justify-evenly gap-14 text-center items-start'>
        {weeklySalesData.map((item,idx)=>{
          return(
            <p className='text-[10px] '>{item.week}</p>
          )
        })}
      </div>
      <span className='block relative  before:absolute before:w-full before:-top-2 before:left-0 before:h-[1px] before:bg-black/10 text-center font-medium text-[10px]'>Week</span>
    </div>
  );
};

export default Graph;
