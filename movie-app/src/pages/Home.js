import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import HeaderComponent from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import { LoadingStyle, ListContainer } from "../components/styles";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [movieName, setMovieName] = useState("");
  console.log(loading);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=1&page=&query_term=${movieName}&sort_by=year`
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
    setMovieName(movieSearch);
    getMovies();
  };

  useEffect(() => {
    getMovies();
  }, [movieName]);

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
        <ListContainer>
          {movies.map(item => {
            return (
              <Movie
                key={item.id}
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
      )}
    </>
  );
}

export default Home;
