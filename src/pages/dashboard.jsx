import { useEffect } from "react"
// import {toast} from "sooner"

const Dashboard = () => {

  useEffect(()=>{
    alert("Welcome to dashboard") 
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>{
        alert("Welcome to dashboard")
      }}>Toast</button>
    </div>
  )
}

export default Dashboard
