import React, {  useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth =  localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    },[navigate])
    const collectData = async () => {
        console.warn(name,email,password);
        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(!result === 422){
            console.warn(result);   
            localStorage.setItem("user", JSON.stringify(result.result))
            localStorage.setItem("token", JSON.stringify(result.auth))
            if(result){
                navigate('/')
            }
        }else{
            alert("please flll the all feilds")
        }
       
    }

    return (
        <section className="register-block">
        
        
        <form method="post" className="register">
        <h3 className="mb-4">Register</h3>
        <div className="form-outline mb-4">
            <input className="inputBox form-control" type="text" placeholder="Enter Name"
                value={name} autoComplete="off"  onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="form-outline mb-4">
            <input className="inputBox form-control" type="text" placeholder="Enter Email"
                value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className="form-outline mb-4">
           <input className="inputBox form-control"  type="password" placeholder="Enter password" autoComplete="current-password"
            value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={collectData} className="btn btn-primary btn-block px-lg-5" type="button">Sign Up</button>
    </form>
    </section>
    )
}
export default SignUp