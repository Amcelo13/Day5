import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import SVGF from "./ghi.svg";

function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const[passwordVisible, setPasswordVisibility] = useState(false)
  
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisible);
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate input fields before submitting the form
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    navigate("/login");
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
          height="70%"
          style={{
            width: "35rem",
            backgroundSize: "cover",
            paddingLeft: "23rem",
            position: "absolute",
            bottom: "5rem",

            right: "67rem",
          }}
        />
      </div>

      <div className="right_div">
        <form onSubmit={handleSubmit}>
          <select className="select_class">
            <option value="1">English(UK)</option>
            <option value="2">Hindi</option>
            <option value="3">French</option>
            <option value="4">Spanish</option>
          </select>

          <div className="form-start">
            <p id="desc_1">Create Account</p>

            <div className="sign_up_container">
              <div className="google">
                <img src="public/google.svg" alt="" width="25px" />
                <p className="bhu">Sign up with Google</p>
              </div>

              <div className="facebook">
                <img src="public/facebook.svg" alt="" width="25px" />
                <p className="bhu">Sign up with Facebook</p>
              </div>
            </div>
            <p className="or">-OR-</p>

            <input
              type="text"
              className="inp"
              placeholder="Full Name"
              required
          
              
            />
            <input
              type="email"
              className="inp"
              placeholder="Email"
              required
           
            />
            <input
              type={passwordVisible ? "text" : "password"}
              className="inp1"
              placeholder="Password"
              required
              id="id_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className={` ${ passwordVisible ? 'far far fa-eye' :' far fa-eye-slash' } poi`} id="togglePassword"
             onClick={()=>handlePasswordVisibility()} ></i>

            <button type="submit" className="btn1" >
              Create Account
            </button>
            <div className="last_class">
              <p className="fg"> Already have an account? </p>
              <button id="re" type="button" onClick={handleNavigate}>
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
