import { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';
import MovieCard from './component/movie-card';





const APIUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SearchMovieApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  const getMovies = () => {
    axios.get(APIUrl).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    }
    ).catch((error) => {
      console.log("error", error);
    })
  }


  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getMovies();
    } else {
      getSearchedMovie();
    }

  }, [search]);

  const getSearchedMovie = () => {

    console.log(SearchMovieApi + search);
    axios.get(SearchMovieApi + search).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    }).catch((error) => {
      console.log("error", error);
    })
  }

  const handleInput = (e) => {
    console.log("value", e.target.value)
    setSearch(e.target.value);
  }


  return (

    <div className='App'>

      <div className='search-box'>
        <div className='title'>Movies </div>
        <input value={search} onChange={handleInput} type='search' placeholder='search movie here' />
      </div>

      <div className='movies'>
        {movies.map((movie) =>
          <MovieCard {...movie} />
        )}
      </div>

    </div>
  );
}

export default App;
