import React, { useState } from "react";
import "./movie-card.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import SelectedMovie from "./selected-movie";






const MovieCard = (props) => {
    const [selectedMovie, setSelectedMovie] = useState([]);
    const { id } = useParams();




    const handleClick = () => {
        axios.get(APIUrl).then((response) => {
            setSelectedMovie(response.data.results);

        })
    }


    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
    const APIUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1/${id}`;


    return (
        <button type="search" onClick={handleClick}>
            <div className="card">
                <div className="poster">
                    <img src={IMGPATH + props.poster_path} alt="" />
                </div>
                <div className="info">
                    <p className="title">{props.title}</p>
                    <p className="vote">{props.vote_average}</p>


                </div>

            </div>


        </button>


    )
}
export default MovieCard;