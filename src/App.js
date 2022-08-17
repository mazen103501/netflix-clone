import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;

// async function sa() {
//   const req = await fetch(
//     "http://api.themoviedb.org/3/movie/438148/videos?api_key=9e8a34328909bb132160b8d69498be79"
//   );
//   const data = await req.json();
//   console.log("as", data);
// }
// sa();

/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3Zibb6lVCRw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */
