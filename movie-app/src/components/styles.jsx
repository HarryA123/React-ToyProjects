import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 300px;
  color: #af1a1a;
  font-size: 24px;
`;

export const Spinner = styled.span`
  width: 8px;
  height: 8px;
  display: block;
  margin: 4px auto 40px;
  position: relative;
  background: #fff;
  box-shadow: -18px 0 #fff, 18px 0 #fff;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;
  @keyframes shadowPulse {
    33% {
      background: #fff;
      box-shadow: -18px 0 #af1a1a, 18px 0 #fff;
    }
    66% {
      background: #af1a1a;
      box-shadow: -18px 0 #fff, 18px 0 #fff;
    }
    100% {
      background: #fff;
      box-shadow: -18px 0 #fff, 18px 0 #af1a1a;
    }
  }
`;

export const LastPage = styled.div`
  color: white;
  width: 200px;
  text-align: center;
  margin: auto;
  font-size: 10px;
  margin-bottom: 20px;
`;

export const FindError = styled.div`
  width: 150px;
  margin: 200px auto 0;
  text-align: center;
  color: #af1a1a;
`;

export const ListContainer = styled.div`
  margin: 80px 80px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media (max-width: 768px) {
    margin: 80px 16px 20px;
  }
`;

export const ClipListContainer = styled.div`
  margin: 0 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media (max-width: 768px) {
    margin: 40px 16px;
  }
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

export const PageTitle = styled.div`
  color: white;
  margin: 60px 90px;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 768px) {
    margin: 60px 16px;
  }
`;

export const Title = styled.p`
  color: white;
  font-weight: 700;
  margin: 0;
  &:visited {
    color: gray;
  }
`;
export const Poster = styled.img`
  width: 80px;
`;
export const Info = styled.span`
  color: white;
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
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 768px) {
    min-width: 350px;
  }
`;

export const Logo = styled(Link)`
  margin-left: 80px;
  text-decoration-line: none;
  color: #af1a1a;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-left: 16px;
  }
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
  outline: none;
  border: none;
  appearance: none;
  height: 32px;
  width: 300px;
  background-color: transparent;
  border-bottom: 1px solid gray;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const LogoutButton = styled.div`
  color: white;
  text-decoration: none;
  padding: 4px 16px;
  cursor: pointer;
  :visited {
    color: inherit;
  }
`;

export const LoginButton = styled(Link)`
  color: white;
  font-size: 10px;
  text-decoration: none;
  margin-left: 20px;
`;

export const MenuIcon = styled.img`
  margin-left: 12px;
  margin-right: 80px;
  z-index: 2;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;

export const MenuCloseIcon = styled.img`
  cursor: pointer;
  margin-left: auto;
  margin-right: 80px;
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;

export const SideBar = styled.div`
  background-color: black;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: start;
  position: fixed;
  top: 0;
  right: 0;
  transition: 850ms;
  flex-direction: column;
  border-left: 1px solid gray;
  z-index: 1;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
export const SideBarBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0 8px 16px;
  list-style: none;
  height: 60px;
  :hover {
    background-color: ${props => (props.hover ? "#af1a1a" : "black")};
  }
`;

export const SideBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 4px 16px;
  :visited {
    color: inherit;
  }
`;

export const DetailContainer = styled.div`
  color: white;
  margin: 80px;
  @media (max-width: 768px) {
    margin: 80px 16px;
  }
`;

export const DetailTitle = styled.div`
  font-size: 16px;
  padding: 0;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const DetailImage = styled.img`
  height: 200px;
  @media (max-width: 768px) {
    height: 200ps;
    width: 133px;
    margin: 0 auto 30px;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  min-width: 300px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => (props.signUp ? "12px" : "40px")};
  padding: 40px 16px;
  width: 400px;
  background-color: #202020;
  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const LoginText = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
`;

export const LoginFormText = styled.div`
  margin-bottom: 4px;
  margin-top: 20px;
  font-size: 10px;
`;

export const LoginFormErrorText = styled.div`
  margin-top: 4px;
  color: red;
  font-size: 10px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 28px;
  background-color: transparent;
  border-color: transparent;
  border-style: none;
  border-bottom: 1px solid white;
  color: #d0d0d0;
  :focus {
    outline: none;
    color: white;
  }
`;

export const LoginSubmit = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: ${props => (props.signUp ? "40px" : "80px")};
  background: ${props => (props.notAllow ? "#af1a1a" : "#565656")};
  color: white;
  border: 1px solid #565656;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  :disabled {
    background-color: #565656;
    color: #6f6f6f;
  }
`;

export const SignUpLink = styled(Link)`
  color: gray;
`;

export const SignUpBox = styled.div`
  text-align: center;
  font-size: 10px;
  margin-top: 20px;
`;
