import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./selected-movie.css"





const SelectedMovie = () => {
    const { id } = useParams();

    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
    const APIUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=04c35731a5ee918f014970082a0088b1`;

    const [selectedMovie, setSelectedMovie] = useState({});


    const getMovie = () => {
        axios.get(APIUrl).then((response) => {
            console.log(response.data);
            setSelectedMovie(response.data);

        }
        ).catch((error) => {
            console.log("error", error);
        })
    }


    useEffect(() => {
        getMovie();

    }, []);

    return (
        <>
            <div className="select">

                <div className="posters">
                    <img id="image" src={IMGPATH + selectedMovie.poster_path} alt="" />
                </div>
                <div className="inf">
                    <p className="title2">{selectedMovie.title}</p>
                    <span className="vot">Rating:  {selectedMovie.vote_average}</span>
                    <span className="lang">  Language: {selectedMovie.original_language}</span>
                    <p className="overview">{selectedMovie.overview}</p>
                    <p className="date"><strong>Release Date:</strong>  {selectedMovie.release_date}</p>
                    <span className="status"><strong>Status:</strong>  {selectedMovie.status}</span>

                </div>

            </div>

        </>
    )
}

export default SelectedMovie;