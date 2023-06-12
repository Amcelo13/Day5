import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import SVGF from "./ghi.svg";



function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const[passwordVisible, setPasswordVisibility] = useState(false)
  
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisible);
  };

  const handleNavigateLog = () => {
    navigate("/home");
  };
  const handleNavigate = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate input fields before submitting the form
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="left_div">
        <img
          src="public/LOGO.png"
          alt=""
          style={{ marginLeft: "1rem", marginTop: "1.2rem" }}
        />
        <p id="desc">Find 3D Objects, Mockups and Illustrations here.</p>
        <img
          src={SVGF}
          height="65%"
          style={{
            width: "35rem",
            // marginBottom:'2rem',
            paddingLeft: "23rem",
            position: "absolute",
            bottom: "6.5rem",
          
            right: "67rem",
          }}
        />
      </div>

      <div className="right_div">
        <form>
          <select className="select_class">
            <option value="1">English(UK)</option>
            <option value="2">Hindi</option>
            <option value="3">French</option>
            <option value="4">Spanish</option>
          </select>

          <div className="form-start">
            <p id="desc_1">Login Account</p>

            <div className="sign_up_container">
                    <div className="google">
                    <img src="public/google.svg" alt="" width="25px"/>
                    <p className="bhu">Sign In with Google</p>
                    </div>

                    <div className="facebook">
                    <img src="public/facebook.svg" alt="" width="25px"/>
                    <p className="bhu">Sign In with Facebook</p>
                    </div>
                   
            </div>
            <p className="or">-OR-</p>
           
            <input type="email" className="inp" placeholder="Email" required/>
            <input type="password" className="inp" placeholder="Password" required/>

            <button className="btn1"
            onClick={()=>handleNavigateLog()}>Log In</button>
            <div className="last_class"> 
            <p className="fg"> Register for new account? </p>
            <button id="re"type="submit"
            onClick={()=>handleNavigate()}>Register</button>
           </div>
            </div>

         
        </form>
      </div>
    </div>
  );
}

export default SignUp;
