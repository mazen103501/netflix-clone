import React from "react";
import Banner from "../Banner/Banner";
import List from "../List/List";
import Nav from "../Nav/Nav";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Nav></Nav>
      <Banner></Banner>
      <List></List>
    </div>
  );
}

export default Home;
