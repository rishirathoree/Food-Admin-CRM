import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SignUp } from '../../../../Store/Slices/Authentication'

const Login = () => {

  const dispatch = useDispatch()
  const [auth,setAuth] = useState({
    username:'',
    email:'',
    password:''
  })

  const [errorMessage,setErrorMessages] = useState([])
  useEffect(()=>{if(errorMessage.length > 0){
    setTimeout(() => {
      setErrorMessages([])
    }, 5000);
  }},[errorMessage])

  const handleChange = (e) => {
    const {name,value} = e.target
    setAuth((p)=>({
      ...p,
      [name]:value
    }))
  }

  const handleSubmit = () => {
    const errors = [];

    for (const [key, value] of Object.entries(auth)) {
      if (value === '' || value.length === 0) {
        errors.push(key);
      }
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
    }

    dispatch(SignUp(auth))
  };

  return (
    <div className='flex items-center justify-center w-full bg-gray-100/40 h-screen flex-col space-y-2'>
        <h1 className="uppercase font-extrabold leading-none tracking-tighter text-gray-600 text-2xl dark:text-white">Dundzo.</h1>
      <div className='w-1/3 bg-gray-50 shadow-sm shadow-black/5 rounded-lg h-min p-2'>
        <div className='bg-white h-min w-full space-y-4 text-center flex items-center flex-col p-4'>
            
            <p className='text-gray-800 text-md font-bold uppercase'>SignUp</p>
            
            <span className='border-y-[1px] py-4 border-dashed'>
            <p className='text-gray-800 text-[10px] font-semibold uppercase'>By login, I agree the Grocers <span className='text-blue-500'>privacy policy</span> and <span className='text-blue-500'>terms and conditions</span>.</p>
            </span>

            <span className='w-full block space-y-4 border-dashed'>
           
            <label htmlFor="username" className='text-left w-full space-y-2 block '>
                <p className='text-gray-400 text-[10px]'>Username</p>
                <input onChange={handleChange} value={auth.username} id='username' type="text" className='w-full text-[12px] outline-none outline-blue-500/20 focus:outline-blue-500/40 outline-2 duration-500 p-2 rounded-sm' name="username" placeholder='Enter your username' />
                {errorMessage.includes('username') && <p className='font-semibold text-xs text-red-500'>Please fill the required fields.</p>}
            </label>

            <label htmlFor="email" className='text-left w-full space-y-2 block '>
                <p className='text-gray-400 text-[10px]'>Email</p>
                <input onChange={handleChange} value={auth.email} id='email' type="text" className='w-full text-[12px] outline-none outline-blue-500/20 focus:outline-blue-500/40 outline-2 duration-500 p-2 rounded-sm' name="email" placeholder='Enter your email' />
                {errorMessage.includes('email') && <p className='font-semibold text-xs text-red-500'>Please fill the required fields.</p>}
            </label>

            <label htmlFor="password" className='text-left w-full space-y-2 block '>
                <p className='text-gray-400 text-[10px]'>Password</p>
                <input onChange={handleChange} value={auth.password} id='password' type="text" className='w-full text-[12px] outline-none outline-blue-500/20 focus:outline-blue-500/40 outline-2 duration-500 p-2 rounded-sm' name="password" placeholder='Enter your password' />
                {errorMessage.includes('password') && <p className='font-semibold text-xs text-red-500'>Please fill the required fields.</p>}
            </label>

            
            {/* <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" /  >
                <label for="link-checkbox" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a className="text-blue-600 hover:underline">terms and conditions</a>.</label>
            </div> */}


            <button onClick={handleSubmit} type="button" className="text-white w-full bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-[3px] focus:ring-blue-300 uppercase font-semibold rounded-md text-sm p-3 shadow-inner text-center ">Create an account</button>
            </span>

            {/* <span className='w-full block space-y-2'>
            <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 w-full flex space-x-2 items-end justify-center">
                <p className='font-semibold text-[12px] capitalize'>Continue with apple</p>
            </button>

            <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 w-full flex space-x-2 items-end justify-center">
                <p className='font-semibold text-[12px] capitalize'>Continue with google</p>
            </button>
            </span> */}

        </div>
        {/* <p className='p-2 text-[12px] font-medium text-slate-500'>Question? Need a hand?</p> */}
      </div>
    </div>
  )
}

export default Login
