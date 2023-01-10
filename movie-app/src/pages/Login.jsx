import GlobalStyle from "../GlobalStyle";

import {
  LoginContainer,
  LoginText,
  LoginFormText,
  LoginInput,
  LoginFormErrorText,
  LoginSubmit,
} from "../components/styles";

function Login() {

  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <LoginText>
          이메일과 비밀번호를 <br />
          입력해주세요
        </LoginText>
        <form>
          <LoginFormText>이메일 주소</LoginFormText>
          <LoginInput type="string" placeholder="이메일 주소를 입력하세요" />
          <LoginFormErrorText>올바른 형식이 아닙니다</LoginFormErrorText>
          <LoginFormText>비밀번호</LoginFormText>
          <LoginInput type="password" placeholder="비밀번호를 입력하세요" />
          <LoginFormErrorText>올바른 형식이 아닙니다</LoginFormErrorText>
          <br />
          <LoginSubmit type="submit">로그인</LoginSubmit>
        </form>
      </LoginContainer>
    </>
  );
}

export default Login;
