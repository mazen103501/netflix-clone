import React from "react";
import Nav from "../Nav/Nav";
import "./Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { logout } from "../../store/userSlice";
function Profile() {
  const email = useSelector((state) => state.user.user.email);
  console.log(email);
  const dispatch = useDispatch();
  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="profile">
      <Nav hide={true} />
      <div className="info">
        <div className="center-div">
          <h1>Edit Profile</h1>
          <div className="data">
            <div className="image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
              />
            </div>
            <div className="email-plans">
              <p className="email">{email}</p>
              <div className="plans">
                <h4>Plans (Current Plan: Basic)</h4>
                <p>Renew Date: 07/9/2023</p>
                <div className="all-plans">
                  <div className="single-plan">
                    <div className="plan-type">
                      <p>Netflix Basic</p>
                      <p>480p</p>
                    </div>
                    <button className="subscribe package">
                      Current Package
                    </button>
                  </div>
                  <div className="single-plan">
                    <div className="plan-type">
                      <p>Netflix Standerd</p>
                      <p>1080p</p>
                    </div>
                    <button className="subscribe">Subscribe</button>
                  </div>
                  <div className="single-plan">
                    <div className="plan-type">
                      <p>Netflix Premium</p>
                      <p>4K+HDR</p>
                    </div>
                    <button className="subscribe">Subscribe</button>
                  </div>
                </div>
                <button className="signout" onClick={signout}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
