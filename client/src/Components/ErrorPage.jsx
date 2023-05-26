import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <div className="container">
        <div style={{ minHeight: "85vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1679399927~exp=1679400527~hmac=dd886d88ebe6e51bb90fefe15a7a4d772e04faae2a7c0b82c74d1574f3fcf09b" alt="error" style={{ width: "500px", marginBottom: 20 }} />
          {/* <h1 className="mb-3">404 ERROR </h1> */}
          <h2 className="mb-3">PAGE NOT FOUND</h2>
          <NavLink to="/" className="btn btn-primary" style={{ fontSize: 18 }}> Back To Home Page </NavLink>
        </div>
      </div>
  )
}

export default ErrorPage