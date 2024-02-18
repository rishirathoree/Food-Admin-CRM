import React from 'react'
import FoodsTable from './SubComps/FoodsTable'
import CreateFoodModal from './SubComps/CreateFoodModal'

const Foods = () => {
    return (
        <>
        <div>
        <FoodsTable />
        </div>
        <CreateFoodModal />
        </>
  )
}

export default Foods
