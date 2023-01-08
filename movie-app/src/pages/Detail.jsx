import { useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { callMovieDetail } from "../features/movieSlice";
import HeaderComponent from "../components/HomeButton";
import {
  Info,
  DetailContainer,
  DetailTitle,
  DetailImage,
  DetailRow,
  DetailColumn,
  Spinner,
} from "../components/styles";

function Detail() {
  const { id } = useParams();
  const { detail, isLoading, clips } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const getClip = () => {
    dispatch({
      type: "film/clip",
      info: detail,
    });
  };

  useEffect(() => {
    dispatch(callMovieDetail({ id: id }));
  }, []);
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <DetailContainer>
        {isLoading ? (
          <Spinner className="loader" />
        ) : (
          <DetailRow>
            <DetailImage src={detail.medium_cover_image} alt={detail.title} />
            <DetailColumn>
              <div>
                <DetailTitle>
                  {detail.title_long}
                  <span onClick={getClip} style={{ cursor: "pointer" }}>
                    {clips.map(item => item.title).includes(detail.title)
                      ? "🧡"
                      : "🤍"}
                  </span>
                </DetailTitle>
                <Info>
                  Rating : {detail.rating} /10
                  <br />
                  RunTime : {(detail.runtime / 60).toFixed(1)}h <br />
                  Genres :{" "}
                  {detail.hasOwnProperty("genres")
                    ? detail.genres.join(", ")
                    : null}
                  <br />
                  Language : {detail.language} <br />
                  MPA : {detail.mpa_rating} <br />
                </Info>
              </div>
              <div>
                <h3>Synopsis</h3>
                {detail.description_full}
              </div>
            </DetailColumn>
          </DetailRow>
        )}
      </DetailContainer>
    </>
  );
}

export default Detail;
