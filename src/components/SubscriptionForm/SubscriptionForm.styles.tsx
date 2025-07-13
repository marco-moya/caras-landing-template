import styled, { css } from "styled-components";
import { FaTimesCircle, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import theme from "../../theme";

type StyledProps = {
  validField?: boolean;
  message?: boolean;
};

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

export const FormContainer =styled.section`
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;
  ${flexCenter("row", "center", "center", 0)};
  font-family: ${({ theme }) => theme.fonts.barlow};

  @media ${({ theme }) => theme.media.laptop} {
    justify-content: space-evenly;
    gap: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  max-height: 600px;
  padding: 1rem;
  ${flexCenter("column", "space-evenly", "stretch", 0)};
  box-shadow: 0 0 1rem 0 #ccc;
  font-size: ${({ theme }) => theme.fontsSizes.stepMinus1};
  font-family: ${({ theme }) => theme.fonts.barlow};
`;

export const FormFrontPage = styled.section`
  width: 40%;
  max-width: 500px;
  display: none;

  @media ${({ theme }) => theme.media.laptop} {
    display: block;
  }
`;

export const FormTitle = styled.p`
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontsSizes.step1};
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  ${flexCenter("column", "space-evenly", "stretch", 0)};
`;

export const FormLabel = styled.label<StyledProps>`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.fontsSizes.step0};
  font-weight: 600;
  color: ${({ validField }) => validField === false ? theme.colors.error : "#000"};
`;

export const FormGroupInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & svg {
    font-size: ${({ theme }) => theme.fontsSizes.step0};
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
  }
`;

export const FormInput = styled.input<StyledProps>`
  width: 100%;
  height: 31px;
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontsSizes.step0};
  font-family: ${({ theme }) => theme.fonts.barlow};
  border: 1px solid #ccc;

  ${(props) =>
    props.validField === false &&
    css`
      border: 3px solid ${({theme}) => theme.colors.error};
    `}

  ${(props) =>
    props.validField === true &&
    css`
      border: 1px solid #ccc;
    `}

  &:focus {
    border: 3px solid #0075ff;
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 1rem 0 #ccc;
    transition: box-shadow 300ms ease-in-out;
  }
`;

export const FormInputError = styled.span<{ show?: boolean }>`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontsSizes.stepMinus1};
  font-weight: 600;
  display: ${( {show} ) => show? "block" : "none"};
`;

export const FormButton = styled.button`
  height: 45px;
  padding: 0;
  line-height: 45px;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.fontsSizes.step0};
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.barlow};
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
    background-color: $main-color;
    box-shadow: 0 0 1rem 0 #920000;
    transition: box-shadow 300ms ease-in-out;
    cursor: pointer;
  }
`;

export const FormMessageSuccess = styled.span<StyledProps>`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.fontsSizes.step1};
  font-weight: 600;
  text-align: center;
  display: ${ ({ message }) => message? "block" : "none"};

  &.form__message-success-active {
    display: block;
  }
`;

export const FormMessageError = styled.div<StyledProps>`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 600;
  text-align: center;
  display: ${ ({ message }) => message? "block" : "none"};
`;

export const FormFooter = styled.p`
  max-width: 320px;
  margin: 1rem auto;
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontsSizes.stepMinus1};
`;

export const CircleCheck = styled(FaCheckCircle)<StyledProps>`
  color: ${({ theme }) => theme.colors.success};
  opacity: ${({ validField }) => validField === true ? 1 : 0};
`;

export const CircleXmark = styled(FaTimesCircle)<StyledProps>`
  color: ${({ theme }) => theme.colors.error};
  opacity: ${({ validField }) => validField === false ? 1 : 0};
`;

export const TriangleExclamation = styled(FaExclamationTriangle)`
  color: ${({ theme }) => theme.colors.error};
`;
