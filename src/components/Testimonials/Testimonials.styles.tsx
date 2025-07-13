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

export const TestimonyTitle = styled.h2`
  margin: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsSizes.step3};
`;

export const Testimony = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  margin: 2rem auto;
  ${flexCenter("row", "center", "stretch", "2rem")};
  flex-wrap: wrap;
`;

export const TestimonyContainer = styled.article`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 1rem 0 #ccc;
`;

export const TestimonyUser = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

export const TestimonyUserAvatar = styled.div`
  width: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TestimonyUserData = styled.div`
  ${flexCenter("column", "center", "stretch", "0.5rem")};
  font-family: ${({ theme }) => theme.fonts.barlow};
  & :first-child {
    font-weight: 600;
  }
`;
