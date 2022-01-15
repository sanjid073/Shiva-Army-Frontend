import React from "react";
import UseFirebase from "../../Hooks/UseFirebase";
import "./Login.css"
import Zoom from 'react-reveal/Zoom';
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const {error, getEmail,getPassWord,SignInWithEmail,setUser,setError, setIsLoading } = UseFirebase();

  
  return (
  <Zoom>
    <div className="login-container">
    <div className="container ">
      <div className="row">
      <div className="col-lg-4"></div>

        <div className="col-lg-5">
            <div className="login-div">
          <h2 className="text-center">Admin Login</h2>
          <form onSubmit={(e) =>{
            e.preventDefault()
           SignInWithEmail()
         .then((userCredential) => {
            setUser(userCredential.user)
            navigate("/DashBoard")
            console.log(userCredential.user);
            console.log("login");
          })
          .catch((err) => {
             setError(err.message)
          })
          .finally(() => {
             setIsLoading(false)
           })
          } } className="w-75 mx-auto">
            <div className="mb-3">
 
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text text-danger">{error}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={getPassWord} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <button type="submit" className="btn main-btn btn-sm">Login</button>
       </form>
       
       </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
    </div>
    </Zoom>
  );
};

export default Login;
