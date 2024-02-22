import React, { useEffect } from 'react'
import { AreaChart, Button, Statistic } from 'keep-react'
import {BookBookmark,Money,CurrencyDollar,Buildings} from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDashboard } from '../../../../Store/Slices/DashboardSlice'

const Cards = () => {

  const dispatch = useDispatch()

  useEffect(()=>{dispatch(GetDashboard())},[dispatch])

  const GetDashboardContext = useSelector(state=>state.Dashboard.GetDashboardValues)

  const {pending,data,error} = GetDashboardContext

  return (
    <div className='grid grid-cols-3 gap-4 p-4 bg-white'>

      {pending ? 
      Array(2).fill(1).map((item,idx)=>{
        return(
          <div className='w-full h-60 animate-pulse rounded-lg bg-slate-100'></div>
        )
      })
      :
      <>

      <div className='ring-1 ring-black/15 shadow-xl shadow-slate-100 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <BookBookmark size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Orders</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Orders?.total}</p>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>This Month</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Orders?.thisMonth.value}</p>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>This Week</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Orders?.thisMonth.value}</p>
        {/* <Statistic.Rate>{data?.Orders?.thisMonth.percentage}</Statistic.Rate> */}
      </div>
      </div>
      </div>
      </div>
      </Statistic>
      </div>

      <div className='ring-1 ring-black/15 shadow-xl shadow-slate-100 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <Money size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Revenues</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Revenue?.total}</p>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>This Month</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Revenue?.thisMonth.value}</p>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>This Week</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <p className='font-semibold text-[23px]'>{data?.Revenue?.thisMonth.value}</p>
        {/* <Statistic.Rate>{data?.Revenue?.thisMonth.percentage}</Statistic.Rate> */}
      </div>
      </div>
      </div>
      </div>
      </Statistic>
      </div>

      </>
       }

      </div>
  )
}

export default Cards


