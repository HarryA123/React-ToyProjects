import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h2>{detail.title_long}</h2>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <h3>Information</h3>
          <h4>
            Rating : {Math.round(detail.rating / 2)}
            <br />
            RunTime : {(detail.runtime / 60).toFixed(1)}h <br />
            Genres : {detail.hasOwnProperty("genres") ? 
              detail.genres.join(", ") : null}
            <br />
          </h4>
          <div>
            <h3>Synopsis</h3>
            {detail.description_full}
          </div>
          <br />
          <h3>Movie shot</h3>
          <img
            style={{ width: "300px" }}
            src={detail.background_image_original}
            alt={detail.title}
          ></img>
        </div>
      )}
    </>

  );
}

export default Detail;
