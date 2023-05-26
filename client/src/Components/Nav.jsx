import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const auth =  localStorage.getItem("user"); 
    const LogoutUser = () =>{
        localStorage.clear();
        navigate('/signup')
    } 
  return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {
            auth ? 
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto align-items-center">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link " aria-current="page" >About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" className="nav-link " aria-current="page" >products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/add-product" className="nav-link " aria-current="page">Add-Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contract" className="nav-link " aria-current="page">Contract</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link " aria-current="page">Profile</NavLink>
                </li>
                <li className="nav-item"><NavLink onClick={LogoutUser} className="nav-link" to="/signup">Logout</NavLink></li>
                <li className="nav-item">
                    <NavLink  className="nav-link ">{JSON.parse(auth).name  }</NavLink>
                </li>
                {/*<li className="nav-item">
                {
                    auth?
                        <NavLink onClick={LogoutUser} className="nav-link" to="/signup">Logout</NavLink>:
                        <NavLink to="/signup" className="nav-link ">Registration</NavLink>
                    }
                </li>
                <li className="nav-item">
                <NavLink to="/login" className="nav-link " aria-current="page">Login</NavLink>
                </li>
                */}

            </ul> :
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto align-items-center">
                <li className="nav-item"><NavLink to="/signup" className="nav-link ">Registration</NavLink></li>
                <li className="nav-item"><NavLink to="/login" className="nav-link " aria-current="page">Login</NavLink></li>
            </ul>
          }    

        </div>
    )
}

export default Nav