import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../../assets/lofo.png'
import {User,SignOut,Gear,Storefront} from 'phosphor-react'
// import SignoutModal from './SignoutModal'
import { Link } from 'react-router-dom'
import SignOutModal from './SignOutModal'
const Profile = () => {

    const [show,setShow] = useState(false)

    const boxRef = useRef()

    const imageRef = useRef()

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (boxRef.current && show && !boxRef.current.contains(e.target) && !imageRef.current.contains(e.target)) {
          setShow(false);
        }
      };
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [show]);

  return (
    <div>
      <div className='relative'>
        <div ref={imageRef} onClick={()=>{setShow(p=>!p)}} className='w-max p-1 gap-2 cursor-pointer items-center flex min overflow-hidden rounded-md ring-1 ring-black/5 text-[12px] text-white font-semibold capitalize tracking-tighter'>
            <img src={logo} className='object-cover w-8 h-8 rounded-md' alt="" />
            <p className='font-medium select-none text-black text-[10px]'>Rishi Rathore</p>
        </div>
        <div ref={boxRef} className={`w-52 top-12 right-0 bg-white ring-1 ring-black/5 shadow-xl rounded-lg shadow-black/5 absolute h-min duration-200
        ${show ? 'visible opacity-100 scale100 translate-y-0' : '-translate-y-4 scal-75 invisible opacity-0'}`}>
        <ul className='p-1'>
          
          <Link onClick={()=>{setShow(false)}} to={'/account/general'}>
          <li className='cursor-pointer hover:bg-gray-100/60 duration-200 text-[12px] flex items-center gap-2 font-light p-2'>
            <User size={13}/>
            <p className='font-medium text-[12px]'>My Profile</p>
          </li>
          </Link>

          <li className='cursor-pointer hover:bg-gray-100/60 duration-200 text-[12px] flex items-center gap-2 font-light p-2'>
            <Gear size={13}/>
            <p className='font-medium text-[12px]'>Account Settings</p>
          </li>

          <li className='cursor-pointer mb-2 border-b-[1px] border-gray-50 hover:bg-gray-100/60 duration-200 text-[12px] flex items-center gap-2 font-light p-2'>
            <Storefront size={13}/>
            <p className='font-medium text-[12px]'>Restaurant Management</p>
          </li>

          <SignOutModal />
          
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile