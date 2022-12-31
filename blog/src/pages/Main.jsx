import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Nav from "../components/Nav";
import Button from "../components/buttons/Button";

const ContainerStyle = styled.div`
  margin: 80px;
`;

const ListStyle = styled(Link)`
  margin-bottom: 12px;
  display: block;
  font-size: 14px;
  :hover {
    font-weight: bold;
  }
`;

const Main = () => {
  const state = useSelector(state => state.posting);
  const showList = state.length;

  return (
    <>
      <Nav />
      <ContainerStyle>
        {!showList ? (
          <div>게시글이 없습니다.</div>
        ) : (
          <div>
            {state.map((item, index) => {
              console.log(item);
              const { title } = item;
              return (
                <ListStyle to={`/${index}`} key={index}>
                  {title}
                </ListStyle>
              );
            })}
          </div>
        )}
      </ContainerStyle>
    </>
  );
};

export default Main;
