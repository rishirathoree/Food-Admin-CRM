import React, { useEffect } from 'react'
import { CardsHome, GraphsHome, TableHome } from './SubComps/Index'
const Home = () => {
  
  return (
    <div className='w-full py-2 h-full'>
      <CardsHome />
      <TableHome />
    </div>
  )
}

export default Home
