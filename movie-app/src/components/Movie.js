import { Link } from "react-router-dom";
import styled from "styled-components";

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

  const Container = styled.div`
    background-color: bisque;
    border-radius: 1em;
    width: 300px;
    height: 400px;
    margin: 1em;
    box-sizing: border-box;
  `;

  const TitleLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 1rem ;
  text-decoration-line: none;
  color: yellow;
  font-weight: 700;
  font-size: 16px;
  &:visited {
    color: purple;
  }
  `;
  const Poster = styled.img`
    box-sizing: border-box;
    width: 140px;
    margin: 1em auto;
    display: block;
  `;

  const Info = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 1em auto;
  position: absolute;
  margin-left: 80px;
  `


  return (
    <Container>
      <TitleLink to={`/Movie/${id}`}>
        {title} ({year})
      </TitleLink>
        <Poster
          src={medium_cover_image}
          alt={title}
        ></Poster>
      <Info>
        Rating : {rating} <br />
        RunTime : {(runtime / 60).toFixed(1)}h <br />
        Genres: {genres[0]} <br />
      </Info>
    </Container>
  );
}

export default Movie;
