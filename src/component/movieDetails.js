import { useEffect, useState } from "react";
import SelectedMovie from "./selected-movie";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";



// const SearchMovieApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function MovieDetails() {
    const [movies, setMovie] = useState([]);
    // const [id, setId] = useState('');
    const { id } = useParams();


    const APIUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1/${id}`;

    useEffect(() => {
        axios.get(APIUrl).then((res) => {
            console.log(res.data.results);
            setMovie(res.data.results);
            // setId(res.data.results);
        })
    }, []);


    return (
        <div>
            <div className='title'>Movies </div>
            <div>
                {movies.length && movies.map((movie) => <SelectedMovie key={movie.id} {...movie} />)}
            </div>
        </div>
    )

}
export default MovieDetails;