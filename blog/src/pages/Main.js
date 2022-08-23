import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Nav from "../components/Nav";
import Button from "../components/buttons/Button";

const ContainerStyle = styled.div`
  border-radius: 1em;
  padding: 1em;
  margin: 8em 20em 0;
  position: relative;
  height: 26em;
`

const ListContainerStyle = styled.div`
  border-radius: 1em;
  padding: 1em;
  height: 24em;
`

const UlStyle = styled.ul`
  padding: 0;
`

const ListStyle = styled(Link)`
  color: black;
  list-Style:none;
  font-size: 20px;
  padding: 0.4em 1em;
  font-weight: bold;
  display: block;
  li {
    text-decoration: none;
  }
`

const Main = () => {
  const state = useSelector(state => state.posting);
  const showList = state.length;
  
  return (
    <>
      <Nav/>
      <ContainerStyle>
        {!showList ? <ListContainerStyle>게시글이 없습니다.</ListContainerStyle> : <ListContainerStyle>
          <UlStyle>
            {state.map((item,index)=>{
              const {title} = item;
              return <ListStyle to={`/${index}`} key={index}>{title}
              </ListStyle>
            })}
          </UlStyle>
        </ListContainerStyle>}
        <Button write={'글쓰기'}/>
      </ContainerStyle>
    </>
  );
};

export default Main