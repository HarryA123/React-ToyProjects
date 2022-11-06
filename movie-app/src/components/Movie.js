import { Link } from "react-router-dom";
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
