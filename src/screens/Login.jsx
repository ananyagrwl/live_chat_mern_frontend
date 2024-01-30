import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/User";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const [data, setData] = useState({email: "", password: "" });

    // const changeHandler = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    const handleLogin = async() => {
        try {
            const data = await login( email, password);
            console.log("data", data);
            if (data) {
              dispatch(updateUser({"name":data.token.name, "email":data.token.email,"id": data.token._id}))
              navigate("/app/welcome");
              console.log("User logged in successfully");
            }
            else {
              alert("Authetication Failed")
            }
          } catch (error) {
            console.log("Error in Login API");
        }
    };

    return (
        <div className='login-container'>
            <div className='image-container'>
                <img src={"live-chat.png"} alt="Logo" className='welcome-logo' />
            </div>
            <div className='login-box'>
                <p className="login-text">Login to your Account</p>
                <TextField
                    // onChange={changeHandler}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="standard-basic"
                    label="Enter Email"
                    variant="outlined"
                    color="secondary"
                    name="email"
                />
                <TextField
                    // onChange={changeHandler}
                    onChange={(e)=>setPassword(e.target.value)}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    color="secondary"
                    name="password"
                />
                <Button variant="outlined" color="secondary" onClick={handleLogin}>
                    Login
                </Button>
                <p>
                    New to Live-Chat ? {" "}
                    <span className="hyper" onClick={() => navigate("/")}>
                        Signup
                    </span>
                </p>
            </div>
        </div>
    );
};