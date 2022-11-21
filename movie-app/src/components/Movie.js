import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Title, Poster, FlexColumn, Info, FlexRow } from "./styles";
import movieSlice from "../features/movieSlice";

function Movie({
  id,
  title,
  year,
  medium_cover_image,
  rating,
  runtime,
  genres,
}) {
  const state = useSelector(state => state.reducer.clips);
  const dispatch = useDispatch();
  const getClip = () => {
    dispatch({ type: "clip/clip", title });
    // dispatch(movieSlice.actions.clip(title));
  };
  console.log(state);

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
          <div onClick={getClip}>{state.includes(title) ? "💜" : "🤍"}</div>
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
