import React from 'react'
import Profile from './Components/Profile'
const Navbar = () => {
  return (
    <div className='w-full p-4 border-b-[1px] bg-white flex items-center justify-between border-black/5 sticky top-0 left-0 z-50'>
      <p className='font-semibold text-sm'>Good Morning, <span className='text-gray-200'>Rishi</span></p>
      <span className='flex items-center gap-4'>
      <Profile />
      </span>
    </div>
  )
}

export default Navbar
