import React from "react";
import * as S from "./LoginFormField.styles.tsx";

const LoginFormField = () => {
  const simulateServerResponse = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fake-token");
      }, 2000);
    });
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    simulateServerResponse()
      .then((token) => {
        localStorage.setItem("token", token);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <S.LoginFormStyles>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" autoComplete={"off"} />
      <label htmlFor="password">비밀번호</label>
      <input id="password" type="password" />
      <button onClick={handleLogin} type="submit">
        로그인
      </button>
    </S.LoginFormStyles>
  );
};

export default LoginFormField;
