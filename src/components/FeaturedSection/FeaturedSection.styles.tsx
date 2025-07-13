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

export const BenefitsTitle = styled.h2`
  margin: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsSizes.step3};
`;

export const Benefits = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin: 2rem auto;
  ${flexCenter("row", "center", "stretch", "2rem")};
  flex-wrap: wrap;
`;

export const BenefitsCard = styled.article`
  width: 90%;
  max-width: 300px;
  ${flexCenter("column", "start", "stretch", "0")};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 1rem 0 #ccc;
`;

export const BenefitsDescription = styled.div`
  padding: 1rem;
  ${flexCenter("column", "start", "stretch", "1rem")};
  & h3 {
    font-size: ${({ theme }) => theme.fontsSizes.step1};
  }
  & p {
    font-size: ${({ theme }) => theme.fontsSizes.step0};
  }
`;
