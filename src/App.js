import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [movieinfo, setMovieinfo] = useState(null);
  const [title, setTitle] = useState("Narnia");

  useEffect(() => {
    const url = `https://www.omdbapi.com/?t=${title}&apikey=c8513e84`;

    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        setMovieinfo(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [title]);

  function readTitle(value) {
    console.log(value);
    setTitle(value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="padd">
          <h1>Search Movie</h1>
          <div>
            <input
              type="text"
              placeholder="Enter movie name"
              className="search-field"
              onChange={(event) => {
                readTitle(event.target.value);
              }}
            />
          </div>

          <div className="movie">
            <div className="poster">
              <img
                src={movieinfo?.Poster}
                className="poster-img"
                alt="movie poster"
              />
            </div>
            <div className="details">
              <div className="padd">
                <h1>{movieinfo?.Title}</h1>
                <p>
                  <strong>Genre :</strong>
                  {movieinfo?.Genre}
                </p>
                <p>
                  <strong>Director :</strong>
                  {movieinfo?.Director}
                </p>
                <p>
                  <strong>Plot :</strong>
                  {movieinfo?.Plot}
                </p>
                <p>
                  <strong>Actors :</strong>
                  {movieinfo?.Actors}
                </p>
                <p>
                  <strong>Box Office :</strong>
                  {movieinfo?.BoxOffice}
                </p>
                <p>
                  <strong>Language :</strong>
                  {movieinfo?.Language}
                </p>
                <p>
                  <strong>Released on :</strong>
                  {movieinfo?.Released}
                </p>
                <p>
                  <strong>Runtime :</strong>
                  {movieinfo?.Runtime}
                </p>

                <div className="ratings">
                  {movieinfo?.Ratings.map((rating, index) => (
                    <div>
                      <strong>{rating.Source}</strong>
                      <h3>{rating.Value}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
