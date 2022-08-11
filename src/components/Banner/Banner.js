import React from "react";
import "./Banner.css";
function Banner() {
  function trimText(text, num) {
    return text?.length > num ? text.slice(0, num) + "..." : text;
  }
  return (
    <div className="banner">
      <div
        className="banner-background"
        style={{
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-preview.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="banner-content">
        <h1>Movie Name</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>
          {trimText(
            `this is a test this is a test this is a test this is a test this is a
          test this is a test this is a test this is a test this is a test this
          is a test this is a test is a test this is a test this is a test this
          is a test this is a test is a test this is a test this is a test this
          is a test this is a test is a test this is a test this is a test this
          is a test this is a test is a test this is a test this is a test this
          is a test this is a test is a test this is a test this is a test this
          is a test this is a test`,
            250
          )}
        </p>
        <p>asdasd</p>
      </div>
    </div>
  );
}

export default Banner;
