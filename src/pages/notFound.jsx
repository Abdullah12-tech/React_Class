import React from 'react'

const NotFound = () => {
  return (
    <div style={{display: "flex", flexDirection:"column", gap:"1rem",margin:"3rem auto", maxWidth: "400px",  alignItems: "center"}}>
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?uid=R187086803&ga=GA1.1.1497205945.1741000044&semt=ais_hybrid&w=740" alt="something is showing" />
        <div className='text-black'>Page not found</div>
    </div>
  )
}

export default NotFound;