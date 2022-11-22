import { useEffect, useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HomeButton";
import { ListContainer } from "../components/styles";
import Movie from "../components/Movie";
import { LoadingStyle } from "../components/styles";
import { useSelector } from "react-redux";

function Clip() {
  const clips = useSelector(state => state.reducer.clips);
  console.log(clips.map(item => item));
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <ListContainer>
        {clips.map(item => {
          return <Movie title={item.title} year={item.year} />;
        })}
        {/* {clips.map(item => {
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
            })} */}
      </ListContainer>
    </>
  );
}

export default Clip;
