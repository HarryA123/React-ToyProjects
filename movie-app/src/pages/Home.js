import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import {
  Spinner,
  FindError,
  LastPage,
  ListContainer,
} from "../components/styles";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import movieSlice, { callMovies } from "../features/movieSlice";

function Home() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  const currentPageNumber = useRef(1);
  const { ref, inView } = useInView();
  const { movies } = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const onChange = event => {
    setMovieSearch(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (movieSearch.trim() === "") {
      alert("키워드를 입력하세요");
    } else {
      currentPageNumber.current = 1;
      window.scrollTo(0, 0);
      setMovieName(movieSearch);
      dispatch(
        callMovies({
          movieName: movieName,
          pageNumber: currentPageNumber.current,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      callMovies({
        movieName: movieName,
        pageNumber: currentPageNumber.current,
      })
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
        setMovieName={setMovieName}
        setMovieSearch={setMovieSearch}
        currentPageNumber={currentPageNumber}
        movieName={movieName}
      />
      <>
        {movies ? (
          <ListContainer>
            {movies.map((item, idx) => {
              return (
                <Movie
                  key={idx}
                  id={item.title}
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
        {movies.length < 20 ? (
          <LastPage>- 마지막 페이지 입니다 -</LastPage>
        ) : (
          <Spinner ref={ref} className="loader" />
        )}
      </>
    </>
  );
}

export default Home;
