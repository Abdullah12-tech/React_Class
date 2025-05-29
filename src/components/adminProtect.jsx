import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminProtect = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAdmin) {
        navigate('/signin')
    }
  }, [isAdmin,navigate])
  
  return isAdmin ? <Outlet/> : null
}

export default AdminProtect