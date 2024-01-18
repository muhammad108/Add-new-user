import React from 'react'
import { clearusers } from '../store/slice/userSlice'
import { useDispatch } from 'react-redux'

function DeleteAllUser() {
  const dispatch = useDispatch()

  const clearAllUser = ()=>{
   dispatch(clearusers())
  }
  return (
    <div>
      <button className='btn btn-clear' onClick={clearAllUser}>clear user</button>
    </div>

    
    
  )
}


export default DeleteAllUser
