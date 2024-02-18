import React from 'react'
import CreateCategoriesModal from './SubComps/CreateCategoriesModal'
import CuisineTable from './SubComps/CuisineTable'
const Categories = () => {
  return (
    <>
    <div>
    <CuisineTable />
    </div>
    <CreateCategoriesModal />
    </>
  )
}

export default Categories
