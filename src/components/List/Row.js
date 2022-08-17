import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Row.css";

function Row({ title, url, Large, margin }) {
  const [movies, setMovies] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Large ? 7 : 5,
    slidesToScroll: 4,
  };
  async function fetchMovies(url) {
    const req = await fetch("https://api.themoviedb.org/3" + url);
    const data = await req.json();
    console.log(title, data);
    setMovies(data.results);
  }
  useEffect(() => {
    fetchMovies(url);
  }, []);
  return (
    <div className="row" style={{ marginTop: Large || margin ? "" : "-130px" }}>
      <h2>{title}</h2>
      <div>
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
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Row;
