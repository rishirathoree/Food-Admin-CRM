import React, { useState } from 'react'
import { SignOut } from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { ClearAuthContext } from '../../../../../Store/Slices/Authentication'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'keep-react'

const SignOutModal = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [showErrorModalX, setShowErrorModalX] = useState(false);

  const logOutHandle = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(ClearAuthContext())
    navigate('/login')
  }

  return (
    <div>
      <li onClick={()=>{setShowErrorModalX(true)}} className='cursor-pointer hover:bg-gray-200/30 border-t-[1px] border-gray-100 hover:bg-gray-100/60 duration-200 text-[12px] flex items-center justify-center gap-2 font-light p-2'>
        <SignOut size={13} />
        <p className='font-medium text-[12px]'>Sign out</p>
      </li>
      <Modal
        icon={<SignOut size={28} color="#E92215" />}
        size="md"
        show={showErrorModalX}
        onClose={()=>{setShowErrorModalX(false)}}
      >
        <Modal.Header>Do you want to logout?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={()=>{setShowErrorModalX(false)}}>
            Cancel
          </Button>
          <Button type="primary" color="error" onClick={logOutHandle}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignOutModal