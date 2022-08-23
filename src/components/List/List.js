import React, { useState } from "react";
import "./List.css";
import Row from "./Row";
import Overlay from "./Overlay";
function List() {
  const [overlay, setOverlay] = useState({
    title: undefined,
    overview: undefined,
    image: undefined,
    vote: undefined,
    youtube: undefined,
  });
  const apiKey = "9e8a34328909bb132160b8d69498be79";
  function closeOverlay() {
    setOverlay({});
  }
  async function clicking(e, id, movies) {
    console.log(id);
    const req = await fetch(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=9e8a34328909bb132160b8d69498be79`
    );
    const data = await req.json();
    const obj = movies.filter((movie) => movie.id === id)[0];
    // console.log(obj);
    const overlayObj = {
      title: obj.title || obj.original_title,
      overview: obj.overview,
      image: obj.poster_path || obj.backdrop_path,
      vote: obj.vote_average,
      youtube:
        data.results[Math.floor(Math.random() * data.results.length)].key,
    };
    console.log(overlayObj);
    // console.log(data.results);
    setOverlay(overlayObj);
  }
  return (
    <div className="list">
      <Row
        title="Netflix Originals"
        url={`/discover/tv?api_key=${apiKey}&language=en-US`}
        Large
        click={clicking}
      ></Row>
      <Row
        title="Trending Now"
        url={`/trending/all/week?api_key=${apiKey}&language=en-US`}
        margin
        click={clicking}
      ></Row>
      <Row
        title="Top Rated"
        url={`/movie/top_rated?api_key=${apiKey}&language=en-US`}
        click={clicking}
      ></Row>
      <Row
        title="Action Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=28`}
        click={clicking}
      ></Row>
      <Row
        title="Comedy Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=35`}
        click={clicking}
      ></Row>
      <Row
        title="Horror Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=27`}
        click={clicking}
      ></Row>
      <Row
        title="Romance Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=10749`}
        click={clicking}
      ></Row>
      <Row
        title="Documentary Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=99`}
        click={clicking}
      ></Row>
      {overlay.title && (
        <Overlay
          src={overlay?.image}
          title={overlay?.title}
          overview={overlay?.overview}
          vote={overlay?.vote}
          youtube={overlay?.youtube}
          close={closeOverlay}
        ></Overlay>
      )}
    </div>
  );
}

export default List;
// const requests = {
//   fetchTrending: `trending/all/week?apt_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals:
//     "/discover/tviapi_key=${API_KEY}&with_networks=213",
//   fetchTopRated: `/sovie/top_ratedtapi_key=1${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie7apikey=S(API_KEY)With_genres=28`,
//   fetchCooedyMovies: `Idisilover/movie7apiskey=${API_KEY}&with_genres=35`,
//   fetchHorrodlovies: `/discover/sovietapi_key=${API_KEY}With_genres=27`,
//   fetchRomanceMovies: `/discover/movle?api_key=${API_KEY}Sedith_genres=10749`,
//   fetchDocusentaries: `/discover/oovietapi_key=${API_KEY}With_genres=99`,
// };
