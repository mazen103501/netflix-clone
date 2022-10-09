import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Row.css";

function Row({ title, url, Large, margin, click }) {
  let s = sizeHandler();
  const [movies, setMovies] = useState();
  const [screenSize, setScreenSize] = useState(s);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenSize,
    slidesToScroll: 4,
  };

  async function fetchMovies(url) {
    const req = await fetch("https://api.themoviedb.org/3" + url);
    const data = await req.json();
    // console.log(title, data.results);
    setMovies(data.results);
  }
  function sizeHandler() {
    let s;
    if (window.innerWidth > 900) {
      s = Large ? 7 : 5;
      // setScreenSize(s);
    } else if (window.innerWidth < 900 && window.innerWidth > 650) {
      s = Large ? 5 : 3;
      // setScreenSize(s);
    } else {
      s = 2;
      // setScreenSize(2);
    }
    return s;
  }
  function changeSlider() {
    setScreenSize(sizeHandler());
  }
  useEffect(() => {
    fetchMovies(url);
    window.addEventListener("resize", changeSlider);
  }, []);
  return (
    <div className="row" style={{ marginTop: Large || margin ? "" : "-130px" }}>
      <h2>{title}</h2>
      <div className={`${Large ? "large" : ""}`}>
        <Slider {...settings}>
          {movies
            ?.filter((e) => e.backdrop_path)
            .map((e) => (
              <img
                key={e?.id}
                className={Large ? "large" : "small"}
                src={`https://image.tmdb.org/t/p/original${
                  Large ? e?.poster_path : e?.backdrop_path
                }`}
                alt={e?.original_title}
                onClick={click.bind(null, e, e?.id, movies)}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Row;

{
  /* <Image
                key={e?.id}
                id={e?.id}
                className={Large ? "large" : "small"}
                src={`https://image.tmdb.org/t/p/original${
                  Large ? e?.poster_path : e?.backdrop_path
                }`}
                alt={e?.original_title}
              /> */
}
