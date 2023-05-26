import React, {  useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const navigate =useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate("/")
    }
}, [])
  const loginUser = async (e) =>{
      e.preventDefault()
     console.log(email, password)
    //  let headers = new Headers();
    //  headers.append('Content-Type', 'application/json');
    //  headers.append('Accept', 'application/json');
    //  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //  headers.append('Access-Control-Allow-Credentials', 'true');
    //  headers.append('GET', 'POST', 'OPTIONS')
     let result = await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
          // Accept:"application/json",
          'Content-Type':'application/json'
        },
        // credentials: 'include',
     })
     result = await result.json();
     console.log(result)
     if(result.auth){
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));
        navigate('/')
     }else{
      alert("Please enter correct detail")
     }  
  }  
  return (
    <section className="signup">
      <div className="container">
        <div className="col-md-6 col-sm-6">
          <div className="registration_form">
            <h3>Sign in</h3>
            <form>
                <div className="felid">
                  <label htmlFor="email"><i className="fa-regular fa-envelope"></i></label>
                  <input type="email" name="email" id="log_user_email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Your Email" autoComplete="on"/>
                </div>
                <div className="felid">
                  <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                  <input type="password" name="password" id="log_password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password " autoComplete="current-password"/>
                </div>   
                <div className="col">
                   <NavLink to="/reset" className='float-end'>Forgot password?</NavLink>
                </div>
                <button className="btn btn-primary" type="submit" id='signin' onClick={loginUser}>Sign in</button>
          </form>
        </div>
        </div>
        <div className="col-md-6 col-sm-6">
        </div>
      </div>
   </section>
  )
}

export default Login