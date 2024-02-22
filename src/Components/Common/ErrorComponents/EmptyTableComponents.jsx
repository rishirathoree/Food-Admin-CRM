import React from 'react'
import img from '../../../assets/nodata.png'
const EmptyTableComponents = () => {
  return (
    <div className='m-4 ring-1 ring-black/10 rounded-lg h-[70vh] flex items-center justify-center flex-col space-y-2'>
        <img src={img}className='select-none w-80 h-80 object-contain mix-blend-multiply'  alt="" />
        <p className='font-semibold text-xs'>No Data</p>
        <p className='font-medium text-xs p-4 text-center w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et assumenda officia accusantium in quibusdam eveniet. Eos iusto recusandae officia provident voluptatem nihil modi laboriosam ipsum cum est quia rem sit ut expedita, facilis in fugiat, voluptate delectus consectetur id autem ipsam? Delectus ipsam et quod ea ad rem vitae!</p>
    </div>
  )
}

export default EmptyTableComponents