import React from "react";
import "./List.css";
import Row from "./Row";
function List() {
  const apiKey = "9e8a34328909bb132160b8d69498be79";
  return (
    <div className="list">
      <Row
        title="Netflix Originals"
        url={`/discover/tv?api_key=${apiKey}&language=en-US`}
        Large
      ></Row>
      <Row
        title="Trending Now"
        url={`/trending/all/week?api_key=${apiKey}&language=en-US`}
        margin
      ></Row>
      <Row
        title="Top Rated"
        url={`/movie/top_rated?api_key=${apiKey}&language=en-US`}
      ></Row>
      <Row
        title="Action Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=28`}
      ></Row>
      <Row
        title="Comedy Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=35`}
      ></Row>
      <Row
        title="Horror Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=27`}
      ></Row>
      <Row
        title="Romance Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=10749`}
      ></Row>
      <Row
        title="Documentary Movies"
        url={`/discover/movie?api_key=${apiKey}&with_genres=99`}
      ></Row>
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
