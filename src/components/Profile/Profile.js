import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import "./Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, makeItAllowed, makeItNotAllowed } from "../../store/userSlice";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Plans from "./Plan";
import Loader from "../Loader/Loader";
function Profile() {
  const [plans, setPlans] = useState([]);
  const [customerPlan, setCustomerPlan] = useState([]);
  const [loader, setLoader] = useState(false);
  const user = useSelector((state) => state.user.user);
  // console.log(plans);
  const dispatch = useDispatch();

  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
        dispatch(makeItNotAllowed());
      })
      .catch((error) => {
        // An error happened.
      });
  }
  function loaderHandler(start) {
    if (start) {
      setLoader(true);
      return;
    }
    setLoader(false);
  }
  async function getPlans() {
    loaderHandler(true);
    const q = query(collection(db, "products"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    data.map(async (ele) => {
      const qu = query(collection(db, "products/" + ele.id + "/prices"));
      const snapshot = await getDocs(qu);
      const p = snapshot.docs.map((doc) => ({
        ...ele,
        ...doc.data(),
        priceId: doc.id,
      }));
      setPlans((prev) => [...prev, p[0]]);
    });
    // const tmp = array[1];
    // array.splice(1, 1);
    // array.splice(2, 0, tmp);
  }
  async function getCurrentPlan() {
    const q = query(collection(db, `customers/${user.uid}/subscriptions`));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((e) => ({
      type: e.data().role,
      end: e.data().current_period_end.seconds,
      id: e.id,
    }));
    console.log(data, "asdasdasdasd");
    setCustomerPlan(data);
  }
  useEffect(() => {
    if (customerPlan.length >= 1) {
      dispatch(makeItAllowed());
    }
  }, [customerPlan]);
  useEffect(() => {
    if (plans.length === 3) {
      loaderHandler(false);
    }
  }, [plans]);
  useEffect(() => {
    getPlans();
    getCurrentPlan();
  }, []);
  function checkSubbed(name) {
    const plans = customerPlan.map((e) => e.type);
    let result;
    plans.forEach((e) => {
      if (e === name) {
        result = true;
      }
    });
    return result;
  }
  function getDateHandler(sec) {
    if (!sec) return "DD/MM/YY";
    let convert = sec * 1000;
    const day = new Date(convert).getUTCDate();
    const month = new Date(convert).getUTCMonth() + 1;
    const year = new Date(convert).getUTCFullYear();
    return `${day}/${month}/${year}`;
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
              <p className="email">{user.email}</p>
              <div className="plans">
                <h4>Plans (Current Plan: {customerPlan[0]?.type || "None"})</h4>
                <p>Renew Date: {getDateHandler(customerPlan[0]?.end)}</p>
                <div className="all-plans">
                  {plans.map((plan) => (
                    <Plans
                      key={plan.id}
                      prodId={plan.product}
                      priceId={plan.priceId}
                      type={plan?.name}
                      description={plan?.description}
                      subbed={checkSubbed(plan?.name)}
                      onLoad={loaderHandler}
                    ></Plans>
                  ))}
                  {loader && <Loader></Loader>}
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
