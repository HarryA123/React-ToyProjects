import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import { Route, useParams } from "react-router-dom";
import { LoadingStyle, ListContainer } from "../components/styles";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const param = useParams();
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
    if (typeof param === Object) {
      setMovieName(movieSearch);
      getMovies();
    } else {
      Route(`/main`);
    }
  };

  // When User Searching...
  useEffect(() => {
    getMovies();
  }, [movieName]);

  // When User Scroll, Keep Adding Movies at the bottom...
  useEffect(() => {
    setPageNumber(prev => prev + 1);
    setMovies(prev => {
      return [...movies, ...prev];
    });
    getMovies();
  }, [inView]);

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
          {inView ? <>🎭</> : <>🧶</>}
          <div ref={ref} style={{ width: "100%", height: "20px" }}></div>
        </>
      )}
    </>
  );
}

export default Home;
