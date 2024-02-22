import React from 'react'
import CategoriesCreateModal from './CategoriesCreateModal'
import { useDispatch } from 'react-redux'

const CategoriesTop = () => {
    
    return (
        <div className='flex items-center justify-between px-6 py-2 pt-4'>
            <p className="font-medium text-[12px]">All Categories</p>
            <CategoriesCreateModal />
        </div>
    )
}

export default CategoriesTop