
import "./movie-card.css"

const MovieCard = (props) => {

    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

    return (
        <div className="card">
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