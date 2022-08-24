import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
function Login() {
  const [signin, setSignin] = useState(false);
  const [register, setRegister] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();
  // console.log(loginEmail, loginPassword, registerEmail, registerPassword);
  async function registerUser(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(login({ email: user.email, token: user.accessToken }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  async function loginUser(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(login({ email: user.email, token: user.accessToken }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  return (
    <div className="login-page">
      <div className="gradient"></div>
      <div className="container">
        <nav className="login-nav-bar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix"
          />
          {!signin && <button onClick={() => setSignin(true)}>Sign In</button>}
        </nav>

        {!signin && (
          <div className="firstpagecont">
            <div className="getstart">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership
              </p>
              <div>
                <input type="text" placeholder="Email" />
                <button onClick={() => setSignin(true)}>Get Stated</button>
              </div>
            </div>
          </div>
        )}
        {signin && (
          <div className="midpage">
            <div className="login-form">
              {!register && (
                <>
                  <h1>Log In</h1>
                  <form onSubmit={loginUser}>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                      type="Password"
                      placeholder="Password"
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button>Login</button>
                    <p>
                      New to Netflix?{" "}
                      <span onClick={() => setRegister(true)}>
                        Sign up now.
                      </span>
                    </p>
                  </form>
                </>
              )}
              {register && (
                <>
                  <h1>Register</h1>
                  <form onSubmit={registerUser}>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                    <input
                      type="Password"
                      placeholder="Password"
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                    <button>Register</button>
                    <p>
                      Have an Account?{" "}
                      <span onClick={() => setRegister(false)}>Login now.</span>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
