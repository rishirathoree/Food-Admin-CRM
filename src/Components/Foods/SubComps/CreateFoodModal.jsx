import React from 'react'
import pizzaImg from '../../../assets/pizza.jpg'
import {X} from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveModalToggle } from '../../../../Store/Slices/App'

const CreateFoodModal = () => {

    const dispatch = useDispatch()
    
    const ModalState = useSelector(state=>state.App.ActiveModal)

  return (
    <div>
        <button onClick={()=>{dispatch(ActiveModalToggle('createfood'))}} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2">Create Foods</button>
        <div className={`fixed top-0 left-0 bg-black/30 w-full h-screen z-50 flex items-center justify-center duration-200
        ${ModalState === 'createfood' ? 'visible opacity-100' : 'invisible opacity-0'}
        `}>
            <div className={`w-1/3 h-min rounded-lg bg-white overflow-hidden duration-500
            ${ModalState === 'createfood' ? 'visible  translate-y-0' : 'invisible -translate-y-8'}
            `}>
                
                <span className='flex items-center justify-between p-4 bg-white border-b-[1px] border-slate-200 w-full block'>
                    <p className='font-semibold text-xs'>Add Foods</p>
                    <X onClick={()=>{dispatch(ActiveModalToggle('createfood'))}} size={15} />
                </span>

                <span className='w-full h-40 block overflow-hidden relative'>
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/10 to-white'></div>
                    <img src={pizzaImg} className='w-full h-full object-cover' alt="" />
                </span>

                <div className='p-8 flex flex-col space-y-2'>
                    <label htmlFor="createfood" className='text-[12px] font-semibold'>Enter Food Name</label>
                </div>

                <div className='p-8 flex flex-col space-y-2'>
                    <label htmlFor="createfood" className='text-[12px] font-semibold'>Enter Food Name</label>
                    <input type="text" className='outline-none focus:outline-none ring-1 ring-black/10 focus:ring-black/20 duration-200 p-3 rounded-lg text-xs' placeholder='Enter Food Name' />
                </div>

                <span className='p-4 bg-white border-t-[1px] border-slate-200 w-full flex items-center gap-2'>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5">Create</button>
                <button onClick={()=>{dispatch(ActiveModalToggle('createfood'))}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5">Cancel</button>

                </span>

            </div>
        </div>
    </div>
  )
}

export default CreateFoodModal