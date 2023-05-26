import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

const ForgotPassword = () => {
      // const param = useParams();
      // console.log(param)
      const {id ,token} = useParams();
      const history = useNavigate();
      const [password ,setPassword] = useState("");
      const [message,setMessage] = useState("")


      const userValid = async()=>{
         const res = await fetch(`/forgotpassword/${id}/${token}`,{
          method:"get",
          headers:{
            "Content-Type":"application/json",
          }
         });
         const data = await res.json()
         if (data.status === 201) {
             console.log("user valid")
         } else {
             history("*")
         }
      } 
      
      const setVal = (e)=>{
         setPassword(e.target.value)
      }
      const sendpassword =async (e)=>{
        e.preventDefault();
        const res = await fetch(`/${id}/${token}`,{
          method:"post",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({password})
        });
        const data = await res.json()
        if (data.status === 201) {
            // console.log("user valid")
            setPassword("")
            setMessage(true)
        } else {
          toast.error("! token expired generate new link",{
            position: "top-center"
          });

        }   
      }


  useEffect(()=>{
    userValid();
  },[])
      

  return (
    <section className='reset_password'>
    <form>
      <h5 className='mb-4'>Enter Your New Password</h5>
      {message ? <h5 className='mb-4' style={{color:"green"}}>password successfully updated</h5> : "" }
      <div className="form-outline mb-4">
        <input type="password" id="form1Example1" name="password" value={password} onChange={setVal} className="form-control"  placeholder=' Enter New Password' autoComplete='off'/>
      </div>
      <button type="submit" onClick={sendpassword} className="btn btn-primary btn-block">Send</button>
      <ToastContainer />  
    </form>
  </section>
    
  )
}

export default ForgotPassword