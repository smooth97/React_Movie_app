import React, {useState, useEffect} from 'react';
import Movie from './Movie.jsx';

function App() {

  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`https://yts.lt/api/v2/list_movies.json`);
    const datas = await response.json();
    setMovieInfo(datas.data.movies);
    console.log(datas.data.movies);
  }

  return (
    <div className="App">
      {movieInfo.map((movie) => {
      return <Movie
      title={movie.title_english}
      image={movie.medium_cover_image}
      genres={movie.genres}
      synopsis={movie.synopsis}
      key={movie.id}
      />
    })}
    </div>
  );
}

export default App;
