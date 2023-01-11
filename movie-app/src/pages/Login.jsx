import GlobalStyle from "../GlobalStyle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  LoginContainer,
  LoginBox,
  LoginText,
  LoginFormText,
  LoginInput,
  LoginFormErrorText,
  LoginSubmit,
  SignUpLink,
  SignUpBox,
} from "../components/styles";
import { useState } from "react";
import { useEffect } from "react";

const schema = yup.object({
  Email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다")
    .required("칸이 비어있습니다."),
  Password: yup
    .string()
    .min(6, "6자리 이상으로 입력하세요")
    .max(12, "12자리 이하로 입력하세요")
    .required("칸이 비어있습니다."),
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector(state => state.user.user);
  const [STORE_EMAIL] = User.map(item => item.email);
  const [STORE_PASSWORD] = User.map(item => item.password);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    if (email === STORE_EMAIL && password === STORE_PASSWORD) {
      alert("로그인 되었습니다");
      dispatch({ type: "user/loginState", isLogin: true });
      navigate("/");
    } else {
      alert("등록되지 않은 회원입니다");
    }
  };

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [emailValid, passwordValid]);

  const handleEmail = e => {
    setEmail(e.target.value);
    const REGEX =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,}$/i;
    if (REGEX.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePassword = e => {
    setPassword(e.target.value);
    const REGEX = /^[A-Za-z0-9]{6,12}$/;
    if (REGEX.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <LoginBox>
          <LoginText>
            이메일과 비밀번호를 <br />
            입력해주세요
          </LoginText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFormText>이메일 주소</LoginFormText>
            <LoginInput
              type="string"
              placeholder="이메일 주소를 입력하세요"
              autoComplete="off"
              defaultValue={email}
              onChangeCapture={handleEmail}
              {...register("Email")}
            />
            <LoginFormErrorText>{errors.Email?.message}</LoginFormErrorText>
            <LoginFormText>비밀번호</LoginFormText>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              defaultValue={password}
              onChangeCapture={handlePassword}
              {...register("Password")}
            />
            <LoginFormErrorText>{errors.Password?.message}</LoginFormErrorText>
            {notAllow ? (
              <LoginSubmit type="submit">로그인</LoginSubmit>
            ) : (
              <LoginSubmit notAllow type="submit">
                로그인
              </LoginSubmit>
            )}
            <SignUpBox>
              <SignUpLink to={"/SignUp"}>회원가입</SignUpLink>
            </SignUpBox>
          </form>
        </LoginBox>
      </LoginContainer>
    </>
  );
}

export default Login;
