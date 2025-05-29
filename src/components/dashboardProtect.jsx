import { useState, useEffect, useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { authContext } from "../context/AuthContext"

const ProtectDashboard = ()=>{
    const {isAuthenticated} = useContext(authContext)
    const navigate = useNavigate()
    const isAuth = isAuthenticated()

    useEffect(() => {
      if (!isAuth) {
        navigate('/signin')
      }
    }, [isAuth, navigate])
    return isAuth ? <Outlet/> : null
}
export default ProtectDashboard