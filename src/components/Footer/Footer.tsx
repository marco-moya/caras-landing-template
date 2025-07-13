import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

import {
  FooterContainer,
  FooterCopy,
  FooterSocialMedia,
  SocialAnchor
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopy>EDITORIAL TELEVISA S.A. DE C.V. TODOS LOS DERECHOS RESERVADOS. TBG - EDITORIAL TELEVISA - ENTERTAINMENT - NEWS</FooterCopy>
      <FooterSocialMedia aria-label="Redes sociales">
        <ul>
          <li>
            <SocialAnchor
              href="https://x.com/CarasMex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Twitter"
            >
              <FaTwitter />
            </SocialAnchor>
          </li>
          <li>
            <SocialAnchor
              href="https://www.facebook.com/search/top?q=caras%20m%C3%A9xico"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Facebook"
            >
              <FaFacebook />
            </SocialAnchor>
          </li>
          <li>
            <SocialAnchor
              href="https://www.instagram.com/carasmexico/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Instagram"
            >
              <FaInstagram />
            </SocialAnchor>
          </li>
        </ul>
      </FooterSocialMedia>
    </FooterContainer>
  );
};

export default Footer;