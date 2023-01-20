import HeaderComponent from "../components/HomeButton";
import { ClipListContainer, PageTitle } from "../components/styles";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";
function Clip() {
  const clips = useSelector(state => state.movie.clips);

  return (
    <>
      <HeaderComponent />
      <PageTitle>내가 관람한 영화</PageTitle>
      <ClipListContainer>
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
      </ClipListContainer>
    </>
  );
}

export default Clip;
