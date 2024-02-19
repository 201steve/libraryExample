import * as S from "./Menu.styles.tsx";

interface HeaderMenu {
  key: string;
  title: string;
}

const headerMenu: HeaderMenu[] = [
  { key: "1", title: "음료" },
  { key: "2", title: "음식" },
  { key: "3", title: "디저트" },
  { key: "4", title: "병음료" },
];

const Menu = () => {
  return (
    <S.MenuContainer>
      {headerMenu.map(({ key, title }) => (
        <S.MenuLink key={key}>{title}</S.MenuLink>
      ))}
    </S.MenuContainer>
  );
};
export default Menu;
