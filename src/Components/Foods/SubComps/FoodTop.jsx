import React from 'react'
import CreateFoodModal from './CreateFoodModal'
const FoodTop = () => {
  return (
    <div className='flex items-center justify-between px-6 py-2 pt-4'>
            <p className="font-medium text-[12px]">All Foods</p>
            <CreateFoodModal />
        </div>
  )
}

export default FoodTop