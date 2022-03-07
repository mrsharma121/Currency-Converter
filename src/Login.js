import React from 'react'
import "./AuthApp.css"
import {Button} from '@material-ui/core';


const Login = (props)  =>{
   const {email,
    setEmail,
    password, 
    setPassword, 
    handleLogin, 
    handleSignup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError}
    
     = props; 
    //  const btn2 = {
    //     textShadow: "black -4px 3px 6px",
    //     boxShadow: "black -7px 6px 11px"
    //  }
    return (
        <section className = 'login'>
            <div className = "loginContainer">
                <label>Username</label>
                <input
                type = "text"
                autoFocus
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg"> {emailError}</p>
                <label>Password</label>
                <input
                type = "password"
                required
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <p className = "errorMsg">{passwordError}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <Button  variant = "contained" onClick ={handleLogin}>Sign in </Button>
                <p>Don't Have an Account ? <span onClick = {() => setHasAccount(!hasAccount)}><Button  variant = "contained">Sign Up</Button></span></p>    
                        
                        </>
                    )
                        :(

                        <>
                        <Button variant = "contained"  onClick  = {handleSignup}>Sign up</Button>
                        <p>Have an Account ? <span onClick = {() => setHasAccount(!hasAccount)}><Button variant = "contained">Sign In</Button> </span></p>    
                            
                            </>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Login
