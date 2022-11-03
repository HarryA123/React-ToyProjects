import { useEffect, useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HomeButton";
import {
  LoadingStyle,
  Info,
  DetailContainer,
  DetailTitle,
  DetailImage,
  DetailRow,
  DetailColumn,
} from "../components/styles";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      {loading ? (
        <LoadingStyle>Loading...</LoadingStyle>
      ) : (
        <DetailContainer>
          <DetailRow>
            <DetailImage src={detail.medium_cover_image} alt={detail.title} />
            <DetailColumn>
              <div>
                <DetailTitle>{detail.title_long}</DetailTitle>
                <Info>
                  Rating : {Math.round(detail.rating / 2)}
                  <br />
                  RunTime : {(detail.runtime / 60).toFixed(1)}h <br />
                  Genres :{" "}
                  {detail.hasOwnProperty("genres")
                    ? detail.genres.join(", ")
                    : null}
                  <br />
                </Info>
              </div>
              <div>
                <h3>Synopsis</h3>
                {detail.description_full}
              </div>
            </DetailColumn>
          </DetailRow>
        </DetailContainer>
      )}
    </>
  );
}

export default Detail;
