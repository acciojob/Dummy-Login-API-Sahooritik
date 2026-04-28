import React, { useState, useRef} from "react";
import Data  from "../../Data"
const Loginform = ()=>{
  
let [userError , setUserError] = useState(false)
let [passwordError , setpasswordError] = useState(false)



    let email = useRef("")
    let password = useRef("")

function handleSubmit(email,password){
    let flag = false

    Data.forEach(v=>{
     if(v.email==email.value.trim() && v.password==password.value.trim()){
        setTimeout(()=>{
         console.log(v)
        },3000)
        flag = true
     }
     else if(v.email==email.value.trim() && v.password!==password.value.trim())
           {flag = true
           setpasswordError(true)}
           
    })
  
if(!flag){
    setUserError(true)
}

}

    return (
        <div>
       <form onSubmit={(e)=>{
         e.preventDefault()
        handleSubmit(email.current,password.current)
        }}>
        <input type="email" placeholder="enter your email" id="input-email" ref={email}/><br/><br/>
        <input type="password" placeholder="enter your password" id="input-password" ref={password}/><br/><br/>
        {passwordError && <p id="password-error">Password Incorrect</p>}
        <button type="submit" id="submit-form-btn" >Login</button>

</form>
      {userError && <p id="user-error">User not Found</p>}
        </div>
    )
}

export default Loginform