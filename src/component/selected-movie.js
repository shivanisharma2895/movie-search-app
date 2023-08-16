
const SelectedMovie = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
    return (
        <div>
            <div className="select">
                <div className="poster">
                    <img src={IMGPATH + props.poster_path} alt="" />
                </div>
                <div className="info">
                    <p className="title">{props.title}</p>
                    <p className="vote">{props.vote_average}</p>
                    <p>{props.overview}</p>

                </div>

            </div>
        </div>
    )
}

export default SelectedMovie;