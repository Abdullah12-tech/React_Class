import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const Signin = () => {
  const {isSigning, signin} = useContext(authContext)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formatedData = {
      email: formData.email.toLowerCase(),
      password: formData.password
    }
   signin(formatedData)
  }
  const handleInput = (e)=>{
    const {name,value} = e.target
    setFormData(prev => ({...prev, [name]:value}))
    console.log(formData);
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label><br />
            <input onChange={handleInput} type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label><br />
            <input onChange={handleInput} type="password" name="password" id="password" />
          </div>
          <button disabled={isSigning} >{isSigning ? "loginng In": "Login"}</button>
      </form>
    </div>
  )
}

export default Signin
