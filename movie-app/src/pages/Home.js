import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { LoadingStyle, FindError, ListContainer } from "../components/styles";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { callMovies } from "../features/movieSlice";

function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  // const [pageNumber, setPageNumber] = useState(1);
  const currentPageNumber = useRef(1);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const { isLoading, movies } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const onChange = event => {
    setMovieSearch(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (movieSearch.trim() === "") {
      alert("키워드를 입력하세요");
    } else {
      setMovieName(movieSearch);
      dispatch(
        callMovies({ movieName: movieName, pageNumber: currentPageNumber })
      );
    }
  };

  // 1. thunk를 사용한 api 관리
  useEffect(() => {
    dispatch(
      callMovies({ movieName: movieName, pageNumber: currentPageNumber })
    );
  }, [movieName]);

  // console.log(movieSearch, movieName, pageNumber, movies);
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
      {isLoading ? (
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
