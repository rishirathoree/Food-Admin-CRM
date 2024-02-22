import React from 'react'
import MenusCreateModal from './MenusCreateModal'
const MenusTop = () => {
    return (
        <div className='flex items-center justify-between px-6 py-2 pt-4'>
        <p className="font-medium text-[12px]">All Menus</p>
        <MenusCreateModal />
        </div>
  )
}

export default MenusTop