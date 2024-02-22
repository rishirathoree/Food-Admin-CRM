import React, { useEffect } from 'react'
import CategoriesTable from './Components/CategoriesTable'
import CategoriesTop from './Components/CategoriesTop'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCatetgories } from '../../../Store/Slices/Categories'
const Category = () => {

  const dispatch = useDispatch()
  
  useEffect(()=>{dispatch(GetAllCatetgories())},[dispatch])

  const Ctgories = useSelector(state=>state.Categories.AllCategories)

    return (
        <div>
        <CategoriesTop />
        <CategoriesTable Categories={Ctgories} />
    </div>
  )
}

export default Category