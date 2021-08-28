import React from 'react'
import Side_bg from "./assets/side_bg.png"
import Bg from "./assets/bg.svg"
import Avatar from "./assets/avatar.png"

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <div className="body">
            <img class="wave" src={Side_bg} />
            <div class="container">
                <div class="img">
                    <img src={Bg} />
                </div>
                <div class="login-content">
                    <div className="form">
                        <img src={Avatar} />
                        <h2 class="title">Welcome</h2>
                        <div className="loginContainer">
                            <label>Email</label>
                            <input type="text" placeholder="test@gmail.com" outoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p className="errorMsg">{emailError}</p>
                            <label>Password</label>
                            <input type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className="errorMsg">{passwordError}</p>
                            <div className="btnContainer">
                                {hasAccount ? (
                                    <>
                                        <button onClick={handleSignup}>Sign Up</button>
                                        <p>Have an account ?{" "}
                                            <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={handleLogin}>Sign In</button>
                                        <p>Dont't have an account ?{" "}
                                            <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="div">
                                <h5>Email</h5>
                                <input type="text" class="input" outoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                <h5>Password</h5>
                                <input type="password" class="input" equired value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" class="btn" value="Login" /> */}
                    </div>
                </div>
            </div>
            {/* <section className="login">
             <div className="loginContainer">
                 <h1 className="Women-Essentials-Heading">Women Essentials</h1>
                 <label>Email</label>
                 <input type="text" placeholder="test@gmail.com" outoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                 <p className="errorMsg">{emailError}</p>
                 <label>Password</label>
                 <input type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)} />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {hasAccount ? (
                 <>
                     <button onClick={handleSignup}>Sign In</button>
                     <p>Have an account ?{" "}
                         <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                 </>
             ) : (
                 <>
                     <button onClick={handleLogin}>Sign In</button>
                     <p>Dont't have an account ?{" "}
                         <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                 </>
             )}
         </div>
     </div>
 </section> */}
        </div>

    )

}

export default Login
