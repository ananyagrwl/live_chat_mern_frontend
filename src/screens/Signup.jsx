import { Backdrop, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { signup } from "../api/auth";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    console.log(name, email, password);
    try {
      const data = await signup(name, email, password);
      console.log("data", data);
      if (data) {
        navigate("/app/welcome");
      }
      else {
        alert("Authetication Failed")
      }
    } catch (error) {
      console.log("Error in Signup API");
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className='image-container'>
          <img src={"live-chat.png"} alt="Logo" className='welcome-logo' />
        </div>

        <div className='login-box'>
          <p className="login-text">Create new Account</p>
          <TextField
          
            onChange={handleNameChange}
            id="name-signin"
            label="Enter User Name"
            variant="outlined"
            color="secondary"
            name="name"
            helperText=""
          />
          <TextField
            onChange={(e)=>setEmail(e.target.value)}
            id="email-signin"
            label="Enter Email Address"
            variant="outlined"
            color="secondary"
            name="email"
          />
          <TextField
            onChange={handlePasswordChange}
            id="password-sigin"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="secondary"
            name="password"
          />
          <Button variant="outlined" color="secondary" onClick={handleSignup}>Register</Button>
          <p>
            Already have an account ?{" "}
            <span className="hyper" onClick={() => navigate("/login")}>Login </span>
          </p>
        </div>
      </div>
    </>
  );
};
