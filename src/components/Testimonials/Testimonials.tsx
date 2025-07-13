import {
  avatarAna,
  avatarDiego,
  avatarSofia
} from "../../assets/images/avatars/avatars"

import {
  TestimonyTitle,
  Testimony,
  TestimonyContainer,
  TestimonyUser,
  TestimonyUserAvatar,
  TestimonyUserData
} from "./Testimonials.styles";

const Testimonials = () => {
  return (
    <>
      <TestimonyTitle>Conoce lo que opinan algunos de nuestros suscriptores</TestimonyTitle>
      <Testimony>
        <TestimonyContainer>
          <TestimonyUser>
            <TestimonyUserAvatar>
              <img src={avatarSofia} alt="foto de mujer" />
            </TestimonyUserAvatar>
            <TestimonyUserData>
              <p>Sofía</p>
              <p>25 años</p>
            </TestimonyUserData>
          </TestimonyUser>
          <p>"¡Me encanta este newsletter! Siempre me mantiene al día con las últimas tendencias en moda y música. Además, he descubierto muchos artistas nuevos gracias a él. ¡Súper recomendado!"</p>
        </TestimonyContainer>
        <TestimonyContainer>
          <TestimonyUser>
            <TestimonyUserAvatar>
              <img src={avatarDiego} alt="foto de hombre" />
            </TestimonyUserAvatar>
            <TestimonyUserData>
              <p>Diego</p>
              <p>32 años</p>
            </TestimonyUserData>
          </TestimonyUser>
          <p>"Soy un apasionado del arte y este newsletter me ha sido de gran ayuda para descubrir nuevas galerías y artistas emergentes. También me gusta mucho la sección de entrevistas, donde puedo conocer más sobre la trayectoria de mis artistas favoritos."</p>
        </TestimonyContainer>
        <TestimonyContainer>
          <TestimonyUser>
            <TestimonyUserAvatar>
              <img src={avatarAna} alt="foto de mujer" />
            </TestimonyUserAvatar>
            <TestimonyUserData>
              <p>Ana</p>
              <p>55 años</p>
            </TestimonyUserData>
          </TestimonyUser>
          <p>"Este newsletter es perfecto para personas como yo que no tienen mucho tiempo para estar buscando información en internet. Me llega toda la información a mi bandeja de entrada y puedo leerla cuando tengo tiempo. ¡Muy recomendable!"</p>
        </TestimonyContainer>
      </Testimony>
    </>
  );
};

export default Testimonials;