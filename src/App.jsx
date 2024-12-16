import { useState } from "react";

function App() {
  const [titleField, setTitleField] = useState("Harry Potter");
  const [movieList, setMovieList] = useState([]);

  const movieFetch = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://api.themoviedb.org/3/search/movie?query=Harry&include_adult=false&language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTA2ZGVkOTU0NjUxMWJmZmQwNWY4MzIwMWVmZDY4NiIsIm5iZiI6MTczNDM0NjAyNC42NDgsInN1YiI6IjY3NjAwNTI4NWJkM2M3MmE4MmMxYzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Wio9ZbI8PWCU-0G1DytHFr_eOdUE-RGro4XfRTaKJ4",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json);

        console.log(json);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <header className="d-flex justify-content-between p-3">
        <div>
          <h1>Boolflix</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={titleField}
              onChange={(e) => {
                setTitleField(e.target.value);
              }}
            />
            <button>Cerca</button>
          </form>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default App;
