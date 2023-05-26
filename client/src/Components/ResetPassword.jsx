import React, { useState } from 'react'

const ResetPassword = () => {
   const [email ,setEmail] =useState('')
   const [message ,setMessage] = useState("")
 
   const setVal =(e)=>{
      setEmail(e.target.value)
    //   console.log(email)
   }
   const sendLink = async(e) =>{
    e.preventDefault();
    const res = await fetch("/sendpasswordlink",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
   const data = await res.json();
   if(data.status === 201){
    setEmail("");
    setMessage(true);
   }else{
    alert("invalid user")
   }

   }

  return (
    <section className='forgot_password'>
        <form>
        <h3 className='mb-4 text-center'>Enter Your Email</h3>
        {message ? <h5 style={{color:"green"}}>password reset link send successfully in your email </h5> : "" }
        <div className="form-outline mb-4">
            <input type="email" id="form1Example1" value={email} onChange={setVal} name="email" className="form-control" placeholder='Enter Email address' autoComplete='off'/>
        </div>
        
        <button type="submit" onClick={sendLink} className="btn btn-primary btn-block px-lg-5">Send</button>
        </form>
    </section>
  )
}

export default ResetPassword