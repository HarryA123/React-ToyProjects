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
  const currentPageNumber = useRef(1);
  const { ref, inView } = useInView();
  const { isLoading, movies } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  console.log("🧡", inView);

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

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      currentPageNumber.current = currentPageNumber.current + 1;
      dispatch(
        callMovies({
          movieName: movieName,
          pageNumber: currentPageNumber.current,
        })
      );
    }
  }, [inView]);

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
          <div
            ref={ref}
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "red",
            }}></div>
        </>
      )}
    </>
  );
}

export default Home;
