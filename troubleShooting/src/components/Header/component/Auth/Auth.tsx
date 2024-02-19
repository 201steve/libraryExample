import { useState, useEffect } from "react";
import * as S from "./Auth.styles";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // 로그아웃 처리 후 상태 업데이트
  };

  const movePage = (path: string) => {
    navigate(path);
  };

  return (
    <S.AuthContainer>
      {isLoggedIn ? (
        <button onClick={logOut}>로그아웃</button>
      ) : (
        <>
          <S.LoginLink onClick={() => movePage("/login")}>로그인</S.LoginLink>
          <S.SignUpLink onClick={() => movePage("/signup")}>
            회원가입
          </S.SignUpLink>
        </>
      )}
    </S.AuthContainer>
  );
};

export default Auth;
