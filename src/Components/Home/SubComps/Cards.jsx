import React from 'react'
import { AreaChart, Button, Statistic } from 'keep-react'
import {BookBookmark,Money,CurrencyDollar,Buildings} from 'phosphor-react'

const Cards = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 bg-white'>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <BookBookmark size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Bookings</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{1200}</Statistic.Amount>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>This Month</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{1129}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>This Week</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>69</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>
      </div>

      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <Money size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Expenses</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>200</Statistic.Amount>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>This Month</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>150</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>This Week</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>50</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>
      </div>

      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <CurrencyDollar size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Revenue</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>7,483</Statistic.Amount>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>This Month</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>2150</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>This Week</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>6150</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>
      </div>

      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic className='space-y-2'>
      <Buildings size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Total Rooms</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>83</Statistic.Amount>
      </div>
      <div>

      <div className='grid grid-cols-2 gap-4'>
      <div className='relative before:absolute before:h-full before:w-[1px] before:bg-black/5 before:right-2 before:top-0'>
      <Statistic.Title ><p className='font-medium text-sm'>Booked</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>50</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>

      <div>
      <Statistic.Title ><p className='font-medium text-sm'>Remaining</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>33</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
      </div>
      </div>

      </div>
    </Statistic>
      </div>

      </div>
  )
}

export default Cards