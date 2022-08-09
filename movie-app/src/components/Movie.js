import { Link } from "react-router-dom";

function Movie({
  id,
  title,
  year,
  medium_cover_image,
  rating,
  runtime,
  genres,
  summary,
}) {
  return (
    <div>
      <h4>
        <Link to={`/Movie/${id}`}>
          {title} ({year})
        </Link>
      </h4>
      <Link to={`/Movie/${id}`}>
        <img
          style={{ width: "100px" }}
          src={medium_cover_image}
          alt={title}
        ></img>
      </Link>
      <h6>
        Rating : {rating} <br />
        RunTime : {(runtime / 60).toFixed(1)}h <br />
        Genres: {genres[0]} <br />
      </h6>
    </div>
  );
}

export default Movie;
