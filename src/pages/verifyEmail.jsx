import React, { useContext, useEffect } from 'react'
import { authContext } from '../context/AuthContext'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {
    const {token} = useParams()
    const {verifyMessage,isSigning, verifyEmail} = useContext(authContext)
    useEffect(() => {
      verifyEmail(token)
    }, [verifyEmail, token])
    
  return (
    <div className='w-1/4 shadow-lg border h-36 m-auto mt-6 rounded-lg p-6 bg-white flex flex-col items-center'>
      <h3>{isSigning && "Verifying your email"}</h3>
      {isSigning && 
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      }
      <h1>{verifyMessage}</h1>
    </div>
  )
}

export default VerifyEmail