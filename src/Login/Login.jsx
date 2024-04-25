import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// import { HeadAndLeft } from "../components/HeadAndLeft";
// import { Dashboard } from "../Pages/Dashboard";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // For demonstration, let's assume login is successful
    // After successful login, navigate to '/headandleft/dashboard'
    navigate("/headandleft/dashboard");
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h1> NASA IT </h1>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit" onClick={handleLogin}>
            Login
          </button>

          {/* <Link to="/headandleft">
            <button type="submit"> Login </button>{" "}
          </Link> */}

          {/*   <Link to="/addsupplier">  <button className='addSupplierbtn'> 
        
        Add new Supplier 
      
      </button></Link>   */}

          {/* Add horizontal line */}
          <hr />

          <span> Forget Password </span>
        </form>
      </div>
      
    </div>
  );
}

export default Login

