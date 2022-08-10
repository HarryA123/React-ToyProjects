import { useEffect, useRef, useState } from "react";
import Movie from "../components/Movie";
import HomeButton from "../components/HomeButton";
import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';


function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieName, setMovieName] = useState('');


  // styled-components
  const SearchInput = styled.input`
  border: 2px solid gray;
  border-radius: 0.3em;
  padding : 0.5em;
  width: 30rem;
  text-align : center;
  background-color : none;
  display: block;
  margin : 4em auto;
`;  

const ListContainer = styled.div`
  box-sizing: border-box;
  `

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=1&page=&query_term=${movieName}&sort_by=year`
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
    <GlobalStyle/>
    <div></div>
    <HomeButton/>

    <form onSubmit={onSubmit}>
      <SearchInput
        onChange={onChange}
        type="text"
        value={movieSearch}
        placeholder="Search"
        >
      </SearchInput>
    </form>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        <ListContainer>
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
        </ListContainer>
      )}
    </>
  );
}

export default Home
