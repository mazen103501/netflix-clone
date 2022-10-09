import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import List from "../List/List";
import Nav from "../Nav/Nav";
import "./Home.css";
function Home() {
  const [hideNavContent, setHideNavContent] = useState(false);

  return (
    <div className="home">
      <Nav hide={hideNavContent}></Nav>
      <Banner></Banner>
      <List></List>
    </div>
  );
}

export default Home;
