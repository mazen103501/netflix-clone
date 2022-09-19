import React from "react";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useSelector } from "react-redux";
function Plans({ type, description, subbed, prodId, priceId, onLoad }) {
  // console.log(subbed);
  const uid = useSelector((state) => state.user.user).uid;
  if (type === "Basic" && !description) {
    description = "480p";
  } else if (type === "Premium" && !description) {
    description = "4K+HDR";
  } else if (type === "Standard" && !description) {
    description = "1080p";
  }
  // console.log(prodId, priceId);
  async function checkOut(priceId) {
    onLoad(true);
    const docRef = await addDoc(
      collection(db, "customers/" + uid + "/checkout_sessions"),
      {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );
    const snapshot = onSnapshot(docRef, async (snap) => {
      const { error, url } = snap.data();
      if (url) {
        onLoad(false);
        window.location.assign(url);
      }
      if (error) {
        onLoad(false);
        alert("error: " + error.message);
      }
    });
  }
  return (
    <div className="single-plan">
      <div className="plan-type">
        <p>Netflix {type}</p>
        <p>{description}</p>
      </div>
      <button
        className={`subscribe ${subbed ? "package" : ""}`}
        disabled={subbed ? true : false}
        onClick={() => checkOut(priceId)}
      >
        {subbed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

export default Plans;
