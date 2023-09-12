import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movie-card.css"
import movies from "./main-panel"
import axios from "axios";



const MovieCard = (props) => {



    const navigate = useNavigate();

    const SelectMovie = () => {
        navigate(`movies/${props.id}`);
    }

    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

    return (
        <div className="card" value={props} onClick={SelectMovie}>
            <div className="poster">
                <img src={IMGPATH + props.poster_path} alt="" />
            </div>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="vote">{props.vote_average}</p>
            </div>
        </div>
    )
}
export default MovieCard;