import GlobalStyle from "../GlobalStyle";
import HeaderComponent from "../components/HomeButton";
import { ListContainer } from "../components/styles";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";

function Clip() {
  const clips = useSelector(state => state.reducer.clips);
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <ListContainer>
        {clips.map(item => {
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
            />
          );
        })}
      </ListContainer>
    </>
  );
}

export default Clip;
