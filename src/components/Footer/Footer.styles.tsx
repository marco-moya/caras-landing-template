import styled, { css } from "styled-components";

const flexCenter = (
  direction: string = "row",
  justify: string = "center",
  align: string = "center",
  gap: string | number = 0
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  gap: ${gap};
`;

export const FooterContainer = styled.footer`
  width: 80%;
  height: 300px;
  padding: 2rem 0;
  margin: 0 auto;
  ${flexCenter("column", "start", "stretch", "1rem")};
  border-top: thin solid #ccc;
`;

export const FooterCopy = styled.p`
  color: #666;
  font-size: ${({ theme }) => theme.fontsSizes.step0};
`;

export const FooterSocialMedia = styled.nav`
  display: flex;
  gap: 1rem;

  & ul {
    display: flex;
    gap: 1rem;
  }
`;

export const SocialAnchor = styled.a`
  color: ${({ theme }) => theme.colors.text};
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.iconHover};
    transform: scale(1.1);
    transition: 0.2s ease;
  }

  svg {
    font-size: 2rem;
  }
`;
