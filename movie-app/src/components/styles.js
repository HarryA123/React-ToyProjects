import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 300px;
  color: red;
  font-size: 24px;
`;

export const ListContainer = styled.div`
  margin: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const Container = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  background-color: black;

  :hover {
    background-color: #af1a1a;
    transform: scale(1.02);
    transition: all 0.2s ease-out;
  }
`;
export const Title = styled.p`
  text-decoration-line: none;
  color: white;
  font-weight: 700;
  margin: 0;
  font-size: 12px;
  &:visited {
    color: gray;
  }
`;
export const Poster = styled.img`
  width: 80px;
`;
export const Info = styled.span`
  color: white;
  font-size: 12px;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Logo = styled(Link)`
  text-decoration-line: none;
  color: red;
  font-weight: bold;
  &:focus,
  &:hover {
    transform: scale(1.05);
  }
  &:visited {
    text-decoration-line: none;
  }
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const NavInput = styled.input`
  box-shadow: "none";
  margin-top: "80px";
  color: "white";
  padding: "0.5em";
  border: "1px solid white";
  width: "200px";
  text-align: "center";
  background-color: "black";
  display: "block";
  margin: "4em auto";
`;


export const DetailContainer = styled.div`
  color: white;
  margin: 80px;
  font-size: 12px;
  width: 800px;
`;

export const DetailTitle = styled.div`
  font-size: 16px;
  padding: 0;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const DetailImage = styled.img`
  /* width: 200px; */
  height: 200px;
`;

export const DetailRow = styled.div`
  display: flex;
`;

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: space-between;
`;
