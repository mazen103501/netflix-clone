import React, { useEffect, useState } from "react";
import "./Banner.css";
function Banner() {
  let te = windowSize();
  const [movie, setMovie] = useState();
  const [showBanarText, setShowBanarText] = useState(te);
  // console.log(movie);
  async function getBanner() {
    const req = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=9e8a34328909bb132160b8d69498be79&language=en-US`
    );
    const data = await req.json();
    const movieArr = data.results;
    setMovie(
      movieArr.filter((movie) => movie.backdrop_path && movie.overview)[
        Math.floor(Math.random() * movieArr.length - 1)
      ]
    );
  }
  function windowSize() {
    if (window.innerWidth < 560) {
      return false;
    }
    return true;
  }
  function textHandler() {
    let size = windowSize();
    if (size) {
      setShowBanarText(true);
    } else {
      setShowBanarText(false);
    }
  }
  useEffect(() => {
    getBanner();
    window.addEventListener("resize", textHandler);
  }, []);
  function trimText(text, num) {
    return text?.length > num ? text.slice(0, num) + "..." : text;
  }
  return (
    <div className="banner">
      <div
        className="banner-background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="banner-content">
        <h1>{movie?.name || movie?.original_title || movie?.title}</h1>
        {showBanarText && (
          <p title={movie?.overview}>{trimText(movie?.overview, 250)}</p>
        )}
        <div>
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
      <div className="shadow-effect"></div>
    </div>
  );
}

export default Banner;

// const requests = {
//   fetchTrending: `trending/all/week?apt_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals:
//     "/discover/tviapi_key=S{API_KEY}&with_networks=213",
//   fetchTopRated: `/sovie/top_ratedtapi_key=1${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie7apikey=S(API_KEY)With_genres=28`,
//   fetchCooedyMovies: `Idisilover/movie7apiskey=${API_KEY}&with_genres=35`,
//   fetchHorrodlovies: `/discover/sovietapi_key=${API_KEY}With_genres=27`,
//   fetchRomanceMovies: `/discover/movle?api_key=${API_KEY}Sedith_genres=10749`,
//   fetchDocusentaries: `/discover/oovietapi_key=${API_KEY}With_genres=99`,
// };
