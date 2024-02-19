import * as S from "./Logo.styles.tsx";

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.LogoImage src="/vite.svg" alt="Vite logo" />
      <S.ProductName>번개</S.ProductName>
    </S.LogoContainer>
  );
};

export default Logo;
