import React, { useEffect, useState } from 'react'
import logo from '../../../assets/lofo.png'
import { useDispatch, useSelector } from 'react-redux'
import { ClearAuthContext, login } from '../../../../Store/Slices/Authentication'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [creds, setCreds] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCreds((p) => ({
      ...p,
      [name]: value
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

    for (const [key, value] of Object.entries(creds)) {
      if (value.length === 0 || value === '') {
        errors.push(key)
      }
    }

    if (errors.length > 0) {
      setErrorMessage(errors)
    }
    else {
      dispatch(login(creds))

    }
  }

  const LoginContext = useSelector(state => state.Auth.Auth)


  const { pending, data, error } = LoginContext

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(ClearAuthContext())
      }, 2000);
    }
  }, [error])

  useEffect(()=>{if(data){navigate('/')}},[data])

  return (
    <div className='h-screen flex items-center flex-col gap-4 justify-center'>

      <div className='w-1/3 space-y-8 ring-1 ring-black/5 p-8 rounded-lg flex flex-col shadow-xl shadow-slate-200/60'>

        <span className='select-none flex flex-col items-start gap-1'><img src={logo} className='w-12 object-cover h-12' alt="" /><p className='font-bold tracking-tighter ml-1 uppercase text-lg'>Dappr</p></span>

        <div className='space-y-4 w-full'>

          <div className='w-full space-y-3'>
            <label htmlFor="email"><p className='text-xs font-semibold'>Enter Email</p></label>
            <input value={creds.email} onChange={handleChange} name='email' type="text" id="email" className='outline-none focus:outline-none ring-1 ring-black/10 p-3 text-xs rounded-lg w-full' />
            {errorMessage.includes('email') && <p className='text-xs font-semibold text-red-500'>Please fill the required fields.</p>}
            {error && error.msg === 'Invalid Email' && <p className='text-xs font-semibold text-red-500'>Please enter the valid email.</p>}
          </div>

          <div className='w-full space-y-3'>
            <label htmlFor="password"><p className='text-xs font-semibold'>Enter Password</p></label>
            <input value={creds.password} onChange={handleChange} name='password' type="text" id="password" className='outline-none focus:outline-none ring-1 ring-black/10 p-3 text-xs rounded-lg w-full' />
            {errorMessage.includes('password') && <p className='text-xs font-semibold text-red-500'>Please fill the required fields.</p>}
            
            {error && error.msg === 'Invalid Password' && <p className='text-xs font-semibold text-red-500'>Please enter the valid password.</p>}
          </div>

          <button onClick={handleSubmit} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 ">{pending ? 'Logging...' : 'Login'}</button>

        </div>
      </div>

    </div>
  )
}

export default Login