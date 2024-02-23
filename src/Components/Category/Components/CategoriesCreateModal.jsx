import React, { useEffect, useState } from 'react'
import pizzaImg from '../../../assets/pizza.jpg'
import {X,CircleNotch} from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { ActiveModalToggle } from '../../../../Store/Slices/App'
import { AddCategoriesToContext, ClearCreateCategoryContext, CreateCatgeories } from '../../../../Store/Slices/Categories'
const CategoriesCreateModal = () => {

    const dispatch = useDispatch()

    const ModalState = useSelector(state=>state.App.ActiveModal)

    const [Category,setCategory] = useState({
        name:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setCategory((p)=>({
            ...p,
            [name]:value
        }))
    }

    const [errorMessage, setErrorMessage] = useState([])

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage([])
      }, 7000);
    }
  }, [errorMessage])

  const handleSubmit = () => {

    const errors = []

    for (const [key, value] of Object.entries(Category)) {
      if (value.length === 0 || value === '') {
        errors.push(key)
      }
    }

    if (errors.length > 0) {
      setErrorMessage(errors)
    }

    else {
        const forms = new FormData()
        for (const [key,value] of Object.entries(Category)) {
            forms.append(key,value)
        }
      dispatch(CreateCatgeories(Category))
    }
  }

  const CategoriesCreateContext = useSelector(state=>state.Categories.CreateCategory)

  const {error,pending,data} = CategoriesCreateContext

  useEffect(()=>{
    if(data){
      setCategory({name:''})
      dispatch(AddCategoriesToContext(data))
      dispatch(ActiveModalToggle(''))
    }
  },[data])

  useEffect(()=>{
    if(error){
      setTimeout(() => {
        dispatch(ClearCreateCategoryContext())
      }, 5000);
    }
  },[error])

  return (
    <div>
        <button onClick={()=>{dispatch(ActiveModalToggle('createcat'))}} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2">Create Categories</button>
        <div className={`fixed top-0 left-0 bg-black/30 w-full h-screen z-50 flex items-center justify-center duration-200
        ${ModalState === 'createcat' ? 'visible opacity-100' : 'invisible opacity-0'}
        `}>
            <div className={`w-1/3 h-min rounded-lg bg-white overflow-hidden duration-500
            ${ModalState === 'createcat' ? 'visible  translate-y-0' : 'invisible -translate-y-8'}
            `}>
                
                <span className='flex items-center justify-between p-4 bg-white border-b-[1px] border-slate-200 w-full block'>
                    <p className='font-semibold text-xs'>Add Categories</p>
                    <X onClick={()=>{dispatch(ActiveModalToggle('createcat'))}} size={15} />
                </span>

                <span className='w-full h-40 block overflow-hidden relative'>
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/10 to-white'></div>
                    <img src={pizzaImg} className='w-full h-full object-cover' alt="" />
                </span>
                
                <div className='p-8 flex flex-col space-y-2'>
                    <label htmlFor="createcat" className='text-[12px] font-semibold'>Create Categories</label>
                    <input type="text" value={Category.name} name='name' onChange={handleChange} className='outline-none focus:outline-none ring-1 ring-black/10 focus:ring-black/20 duration-200 p-3 rounded-lg text-xs' placeholder='Enter Catetgory Name' />
                    {errorMessage.includes('name') && <p className='text-xs font-semibold text-red-500'>Please fill the required fields.</p>}
                    {error && error.error && error.error.errors.find((item,idx)=>{return item.message === 'name must be unique'}) && <p className='text-xs font-semibold text-red-500'>Categories Already Exist.</p>}
                </div>

                <span className='p-4 bg-white border-t-[1px] border-slate-200 w-full flex items-center gap-2'>
                
                <button onClick={handleSubmit} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5">
                {pending && <CircleNotch size={15} weight='duotone' className='text-slate-500 animate-spin' />}
                {!pending && 'Create'}
                </button>

                <button onClick={()=>{
                  setCategory({name:''})
                  dispatch(ActiveModalToggle('createcat'))
                }} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5">
                Cancel
                </button>

                </span>

            </div>
        </div>
    </div>
  )
}

export default CategoriesCreateModal