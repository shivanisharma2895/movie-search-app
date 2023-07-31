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
    getMovies();
  }, []);


  return (
    <div className='App'>
      <div className='search-box'>
        <div className='title'>Movies </div>
        <input type='search' placeholder='search movie here' />
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
