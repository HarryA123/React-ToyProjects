import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieName, setMovieName] = useState('');
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&page=&query_term=${movieName}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const onChange = (event) =>{
    setMovieSearch(event.target.value)
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    setMovieName(movieSearch)
  }

  useEffect(() => {
    getMovies();
  }, [movieName]);

  return (
    <>
    <form onSubmit={onSubmit}>
      <input
      onChange={onChange}
      type="text"
      value={movieSearch}
      placeholder="Search"
      ></input>
    </form>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <div>
          {movies.map((item) => (
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
          ))}
        </div>
      )}
    </>
  );
}

export default Home
