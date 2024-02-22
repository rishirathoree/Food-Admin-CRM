import React from 'react'
import { SignOut } from 'phosphor-react'

const SignOutModal = () => {
  return (
    <div>
      <li className='cursor-pointer hover:bg-gray-200/30 border-t-[1px] border-gray-100 hover:bg-gray-100/60 duration-200 text-[12px] flex items-center justify-center gap-2 font-light p-2'>
        <SignOut size={13} />
        <p className='font-medium text-[12px]'>Sign out</p>
      </li>
    </div>
  )
}

export default SignOutModal