import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { login } from "./store/userSlice";
function App() {
  const user = useSelector((state) => state.user.user);
  // console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(login(user.accessToken));
      }
    });
    if (user) {
      navigate("/", { replace: false });
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);

  return (
    <div className="App">
      <Routes>
        {user && <Route path="/" element={<Home />} />}
        {!user && <Route path="login" element={<Login />} />}
      </Routes>
    </div>
  );
}

export default App;

{
  /* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/7fe934cf-013f-45bb-a207-1a8c924a8834/JO-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg" /> */
}
