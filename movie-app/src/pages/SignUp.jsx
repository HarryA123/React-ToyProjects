import GlobalStyle from "../GlobalStyle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
  LoginContainer,
  LoginBox,
  LoginText,
  LoginFormText,
  LoginInput,
  LoginFormErrorText,
  LoginSubmit,
} from "../components/styles";
import { useState } from "react";
import { useEffect } from "react";

const schema = yup.object({
  Name: yup
    .string()
    .min(3, "3자리 이상으로 입력하세요")
    .max(8, "8자리 이하로 입력하세요")
    .required("칸이 비어있습니다."),
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

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    if (!notAllow) {
      dispatch({
        type: "user/registerUser",
        info: { email: email, password: password, name: name },
      });
      alert("회원가입이 완료되었습니다");
      navigate("/Login");
    } else {
      alert("회원가입 할 수 없습니다. 다시 확인해주세요");
    }
  };

  useEffect(() => {
    if (nameValid && emailValid && passwordValid) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [nameValid, emailValid, passwordValid]);

  const handleName = e => {
    setName(e.target.value);
    const REGEX = /^[가-힣]{3,8}|[a-zA-Z]{3,8}$/;
    if (REGEX.test(e.target.value)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

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
        <LoginBox signUp>
          <LoginText>
            새로 오셨군요! <br />
            회원가입을 시작할까요?
          </LoginText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LoginFormText>이름</LoginFormText>
            <LoginInput
              type="text"
              placeholder="이름 입력하세요"
              defaultValue={name}
              onChangeCapture={handleName}
              {...register("Name")}
            />
            <LoginFormErrorText>{errors.Name?.message}</LoginFormErrorText>
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
              <LoginSubmit signUp type="submit">
                회원가입
              </LoginSubmit>
            ) : (
              <LoginSubmit signUp notAllow type="submit">
                회원가입 완료하기
              </LoginSubmit>
            )}
          </form>
        </LoginBox>
      </LoginContainer>
    </>
  );
}

export default SignUp;
