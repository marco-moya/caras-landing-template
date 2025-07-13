import {
  tendencia,
  artista,
  creatividad,
  conocimiento
} from "../../assets/images/illustrations/ilustrations";

import {
  BenefitsTitle,
  Benefits,
  BenefitsCard,
  BenefitsDescription
} from "./FeaturedSection.styles";

const FeaturedSection = () => {
  return (
  <>
    <BenefitsTitle>Beneficios de suscribirse al newsletter</BenefitsTitle>
    <Benefits>
      <BenefitsCard>
        <figure><img src={tendencia} alt="cuatro mujeres modelando diferentes vestidos" /></figure>
        <BenefitsDescription>
          <h3>Mantente al día con las últimas tendencias</h3>
          <p>Recibirás información actualizada sobre las últimas novedades en entretenimiento, moda, arte, cultura y deporte.</p>
        </BenefitsDescription>
      </BenefitsCard>
      <BenefitsCard>
        <figure><img src={artista} alt="artista tocando la guitarra" /></figure>
        <BenefitsDescription>
          <h3>Descubre nuevos artistas</h3>
          <p>Formar parte de la vanguardia cultural descubriendo las estrellas del mañana, conocerás sus historias, sus obras y sus propuestas.</p>
        </BenefitsDescription>
      </BenefitsCard>
      <BenefitsCard>
        <figure><img src={creatividad} alt="taza de café representando un reloj analogo" /></figure>
        <BenefitsDescription>
          <h3>Alimenta tu creatividad</h3>
          <p>El newsletter te proporcionará inspiración para tu propia vida creativa, ya sea que te dediques a la música, la pintura, la escritura o cualquier otra forma de arte.</p>
        </BenefitsDescription>
      </BenefitsCard>
      <BenefitsCard>
        <figure><img src={conocimiento} alt="mujer sentada en un sofa reflexionando" /></figure>
        <BenefitsDescription>
          <h3>Amplía tu conocimiento</h3>
          <p>Aprenderás sobre diferentes culturas, estilos y perspectivas, lo que te ayudará a ser una persona más completa y abierta al mundo.</p>
        </BenefitsDescription>
      </BenefitsCard>
    </Benefits>
  </>
  );
};

export default FeaturedSection;