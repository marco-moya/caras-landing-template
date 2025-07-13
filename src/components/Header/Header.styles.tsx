import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.laptop} {
    padding: 1rem;
  };
  `;

export const HeaderLogo = styled.div`
  width: 55%;
  max-width: 320px;
  margin: 0.5rem;
`;

export const HeaderTitle = styled.h1`
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.fontsSizes.step4};
  font-weight: 800;
`;

export const HeaderSubtitle = styled.p`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontsSizes.step1};
  font-weight: 600;
`;
