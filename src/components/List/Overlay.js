import React from "react";
import "./Overlay.css";
function Overlay({ src, title, overview, vote, youtube, close }) {
  function trimText(text, num) {
    return text?.length > num ? text.slice(0, num) + "..." : text;
  }
  return (
    <div className="overlay">
      <div>
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/original` + src} alt="s" />
        </div>
        <div className="data">
          <div className="header">
            <h2>{title}</h2>
            <p>{vote}/10</p>
          </div>
          <p title={overview}>{trimText(overview, 150)}</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtube}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button onClick={() => close()}>CLose</button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
