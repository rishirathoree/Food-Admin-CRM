import React from 'react'

const TableLoadingShimmer = ({row,innerBoxs}) => {
  const rows = row ? row : 10
  const innerBox = innerBoxs ? innerBoxs : 4
  return (
    <div className='p-4'>
        <ul className='space-y-4'>
            {Array(rows).fill(1).map((item,idx)=>{
                return(
                    <li className='animate-pulse rounded-lg bg-gray-50 grid grid-cols-4 gap-4'>
                        {Array(innerBox).fill(1).map((item,idx)=>{
                            return(
                                <span className='p-5 rounded-md bg-slate-200'></span>
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TableLoadingShimmer