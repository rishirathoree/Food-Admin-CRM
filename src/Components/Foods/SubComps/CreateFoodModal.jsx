import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {X} from 'phosphor-react'
import { ActiveModalToggle } from '../../../../Store/Slices/App'

const CreateFoodModal = () => {
    const ToggleModal = useSelector(state=>state.App.ActiveModal)
  const dispatch = useDispatch()
  const ActiveModal = ToggleModal === 'createfood' ? true : false
  return (
    <div className={`z-50 duration-500 h-screen bg-black/40 w-full fixed top-0 left-0 flex items-center justify-center ${ActiveModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className={`w-2/5 h-3/4 bg-white rounded-lg animate-keep-bounce duration-200 ${ActiveModal ? 'visible translate-y-0 opacity-100 scale-100' : 'translate-y-8 scale-75 invisible opacity-0'}`}>
            
            <span className='flex items-center justify-between p-4 border-b-[1px] border-slate-50'>
                <p className='font-semibold text-[12px]'>Add Foods</p>
                <X onClick={()=>{dispatch(ActiveModalToggle(''))}} size={12}></X>
            </span>

            <div className='p-8'>

            {/* Select Here */}
            

            <label htmlFor="CuisineName" className='space-y-4'>
              <p className='font-medium text-xs'>Food Name</p>
              <input id='CuisineName' type="text" className='w-full ring-[1px] text-xs ring-black/5 p-3 hover:ring-black/10 duration-200 rounded-lg outline-none focus:outline-none' />
            </label>
            </div>

            
            <span className='px-6 py-4 border-t-[1px] w-full block space-x-2 border-slate-50'>

            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3">Create</button>

            <button onClick={()=>{dispatch(ActiveModalToggle(''))}} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-3">Cancel</button>

            </span>


        </div>
    </div>
  )
}

export default CreateFoodModal
