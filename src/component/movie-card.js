import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movie-card.css"
import movies from "./main-panel"
import axios from "axios";



const MovieCard = (props) => {

    const [id, setId] = useState('');

    const navigate = useNavigate();
    const APIUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const SelectMovie = () => {
        axios.get(APIUrl).then((res) => {
            console.log(res.data.results.id);
            setId(res.data.results.id);



            if (id === movies.id) {
                navigate("movies/:id");


            }

        }
        ).catch((error) => {
            console.log("error", error);
        })

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