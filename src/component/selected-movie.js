import React, { useEffect, useState } from "react";
import axios from "axios";
const SelectedMovie = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    const APIUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    useEffect(() => {
        axios.get(APIUrl).then((res) => {
            setMovieInfo(res.data.results)
        })
    }, [selectedMovie]);





    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
    return (
        <div>

            {movieInfo ?
                (<div className="select">
                    <div className="poster">
                        <img src={IMGPATH + props.poster_path} alt="" />
                    </div>
                    <div className="info">
                        <p className="title">{props.title}</p>
                        <p className="vote">{props.vote_average}</p>
                        <p>{props.overview}</p>

                    </div>

                </div>) : ("Loading...")}
        </div>
    )
}

export default SelectedMovie;