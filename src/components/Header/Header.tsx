import logoCaras1 from "../../assets/images/logos/Logo-Caras1.png";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderTitle,
  HeaderSubtitle
} from "./Header.styles";

const Header = () => {
  return (
      <HeaderContainer>
        <HeaderLogo>
          <img src={logoCaras1} alt="Logo Caras" />
        </HeaderLogo>
        <HeaderTitle>Alimenta tu mente y tu alma</HeaderTitle>
        <HeaderSubtitle>disfruta de una dosis semanal de entretenimiento, moda, arte y cultura que te enriquecerá como persona.</HeaderSubtitle>
      </HeaderContainer>
  );
};

export default Header;