import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";





const SelectedMovie = () => {
    const { id } = useParams();
    const APIUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

    const [selectedMovie, setSelectedMovie] = useState([]);


    const getMovie = () => {
        axios.get(APIUrl).then((response) => {
            console.log(response.data.results);
            setSelectedMovie(response.data.results);

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
            {
                selectedMovie.map((movie) => {
                    return (<div className="select">

                        <div className="poster">
                            <img src={IMGPATH + movie.poster_path} alt="" />
                        </div>
                        <div className="info">
                            <p className="title">{movie.title}</p>
                            <p className="vote">{movie.vote_average}</p>
                            <p>{movie.overview}</p>

                        </div>

                    </div>)
                })

            }
        </>
    )
}

export default SelectedMovie;