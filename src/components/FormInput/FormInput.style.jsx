import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "#16161d";

const shrinkLabelStyles = css`
  top: -1.75rem;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: white;
  background-color: ${mainColor};
  padding: 0.4rem 0.8rem;
  margin-left: 0;
  font-family: "Moderat Extended";
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  margin-left: 1rem;
  top: 0.8rem;
  transition: 200ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${mainColor};
  font-size: 1rem;
  padding: 0.8rem 1rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${mainColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2rem 0;
`;
