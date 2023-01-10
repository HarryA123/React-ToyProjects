import GlobalStyle from "../GlobalStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

const schema = yup.object({
  Email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다")
    .required("칸이 비어있습니다."),
  Password: yup
    .string("올바른 비밀번호 형식이 아닙니다")
    .min(6,"6자리 이상으로 입력하세요")
    .max(12,"12자리 이하로 입력하세요")
    .required("칸이 비어있습니다."),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    console.log(data);
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
              {...register("Email")}
            />
            <LoginFormErrorText>{errors.Email?.message}</LoginFormErrorText>
            <LoginFormText>비밀번호</LoginFormText>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register("Password")}
            />
            <LoginFormErrorText>{errors.Password?.message}</LoginFormErrorText>
            <br />
            <LoginSubmit type="submit">로그인</LoginSubmit>
            <SignUpBox>
              <SignUpLink to={"/"}>회원가입</SignUpLink>
            </SignUpBox>
          </form>
        </LoginBox>
      </LoginContainer>
    </>
  );
}

export default Login;
