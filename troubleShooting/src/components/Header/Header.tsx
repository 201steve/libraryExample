import Logo from "./component/Logo/Logo.tsx";
import Auth from "./component/Auth/Auth.tsx";
import * as S from "./Header.styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Logo />
      <Auth />
    </S.HeaderContainer>
  );
};
export default Header;
