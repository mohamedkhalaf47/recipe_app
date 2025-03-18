import { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginPopUp.css'

const LoginPopUp = ({setShowLogin}) => {

  const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='loginPopUp'>
      <form className="loginPopUp-container">
        <div className="loginPopUp-title">
          <h2>{currentState}</h2>
          <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginPopUp-inputs">
          {currentState === "Sign Up" && <input type="text" placeholder='Your Name' required/>}
          <input type="email" placeholder='Your Email' required/>
          <input type="password" placeholder='Your Password' required/>
        </div>
        <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="loginPopUp-condition">
          <input type="checkbox"  required/>
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
        </div>
        {currentState === "Login" && <p>Create a New Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>}
        {currentState === "Sign Up" && <p>Already Have an Account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp
