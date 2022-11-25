import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingStyle, FindError, ListContainer } from "../components/styles";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  // console.log(ref, inView, entry);
  // console.log(movies);
  const param = useParams();
  console.log("param:", param);
  console.log(movieName);
  console.log("🌭검색결과들...", movies);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=1&page=${pageNumber}&query_term=${movieName}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const onChange = event => {
    setMovieSearch(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (movieName.trim() === "") {
      alert("키워드를 입력하세요");
    } else {
      setMovieName(movieSearch);
      getMovies();
    }
  };
  const clips = useSelector(state => state.reducer.clips);
  console.log(clips);

  // When User Searching...
  useEffect(() => {
    getMovies();
  }, [movieName]);

  // if (inView === true) {
  //   setPageNumber(prev => prev + 1);
  //   setMovies(prev => {
  //     return prev.concat(movies);
  //   });
  //   getMovies();
  // } else {

  // }
  // When User Scroll, Keep Adding Movies at the bottom...
  // useEffect(() => {
  //   setPageNumber(prev => prev + 1);
  //   setMovies(prev => {
  //     return prev.concat(movies);
  //   });
  //   getMovies();
  // }, [inView]);

  return (
    <>
      <GlobalStyle />
      <HeaderComponent
        onSubmit={onSubmit}
        onChange={onChange}
        movieSearch={movieSearch}
      />
      {loading ? (
        <LoadingStyle>Loading...</LoadingStyle>
      ) : (
        <>
          {movies ? (
            <ListContainer>
              {movies.map(item => {
                return (
                  <Movie
                    key={item.title}
                    id={item.id}
                    title={item.title}
                    year={item.year}
                    medium_cover_image={item.medium_cover_image}
                    rating={item.rating}
                    runtime={item.runtime}
                    genres={item.genres}
                    summary={item.summary}
                  />
                );
              })}
            </ListContainer>
          ) : (
            <FindError>
              <h4
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}>
                {movieName}
              </h4>
              이 영화를 찾을 수 없습니다
            </FindError>
          )}
          {inView ? <>🎭</> : <>🧶</>}
          <div ref={ref} style={{ width: "100%", height: "20px" }}></div>
        </>
      )}
    </>
  );
}

export default Home;
