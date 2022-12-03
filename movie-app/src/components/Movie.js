import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Title, Poster, FlexColumn, Info, FlexRow } from "./styles";

function Movie({
  id,
  title,
  year,
  medium_cover_image,
  rating,
  runtime,
  genres,
}) {
  const clips = useSelector(state => state.reducer.clips);
  const dispatch = useDispatch();
  const getClip = () => {
    dispatch({
      type: "film/clip",
      info: { id, title, year, medium_cover_image, rating, runtime, genres },
    });
  };

  return (
    <Container>
      <FlexRow>
        <Link to={`/Movie/${id}`}>
          <Poster src={medium_cover_image} alt={title} />
        </Link>
        <FlexColumn>
          <Title>
            {title} ({year})
          </Title>
          <div onClick={getClip}>
            {clips.map(item => item.title).includes(title) ? "🧡" : "🤍"}
          </div>
          <Info>
            Rating : {rating} <br /> RunTime : {(runtime / 60).toFixed(1)}h
            <br />
            Genres: {genres ? genres[0] : null}
          </Info>
        </FlexColumn>
      </FlexRow>
    </Container>
  );
}

export default Movie;
