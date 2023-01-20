import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  Spinner,
  FindError,
  LastPage,
  ListContainer,
} from "../components/styles";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import { useSelector, useDispatch } from "react-redux";
import { callMovies } from "../features/movieSlice";

function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  const currentPageNumber = useRef(1);
  let { ref, inView } = useInView();
  const { movies, isLoading, success } = useSelector(state => state.movie);
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
      currentPageNumber.current = 1;
      FetchMoreMovies(movieSearch, currentPageNumber.current);
    }
  };

  const FetchMoreMovies = useCallback((movieSearch, currentPageNumber) => {
    dispatch(
      callMovies({
        movieName: movieSearch,
        pageNumber: currentPageNumber,
      })
    );
  },[]);

  useEffect(() => {
    if (movies.length > 0 && inView) {
      currentPageNumber.current = currentPageNumber.current + 1;
      FetchMoreMovies(movieSearch, currentPageNumber.current);
    } else {
      return;
    }
  }, [inView]);

  return (
    <>
      <HeaderComponent
        onSubmit={onSubmit}
        onChange={onChange}
        movieSearch={movieSearch}
        setMovieSearch={setMovieSearch}
      />
      <>
        {success ? (
          <>
            <ListContainer>
              {movies.map((item, idx) => {
                return (
                  <Movie
                    key={idx}
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
            {movies.length < 20 && isLoading === false ? (
              <LastPage>- 마지막 페이지 입니다 -</LastPage>
            ) : (
              <Spinner className="loader" />
            )}
            {!isLoading && <div ref={ref}></div>}
          </>
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
      </>
    </>
  );
}

export default Home;
