import * as S from "./LoginForm.styles.tsx";
import LoginFormField from "./LoginFormFIeld/LoginFormField.tsx";

const LoginForm = () => {
  return (
    <S.FormContainer>
      <h3>로그인</h3>
      <LoginFormField />
    </S.FormContainer>
  );
};

export default LoginForm;
