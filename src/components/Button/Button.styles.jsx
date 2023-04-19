import styled from "styled-components";

export const BaseButton = styled.button`
  width: 100%;
  min-height: 50px;
  letter-spacing: 1px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  background-color: #16161d;
  color: #f5f5f5;
  text-transform: uppercase;
  font-family: "Moderat Extended";
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #16161d;

  @media screen and (max-width: 400px) {
    padding: 0.25rem 0.5rem;
    min-width: 0;
    width: 45%;
  }

  &:hover {
    background-color: #f5f5f5;
    color: #16161d;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  border: 2px solid #4285f4;

  background-color: #4285f4;
  color: #f5f5f5;

  &:hover {
    background-color: #f5f5f5;
    color: #4285f4;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #f5f5f5;
  color: #16161d;
  border: 2px solid #16161d;

  &:hover {
    background-color: #16161d;
    color: #f5f5f5;
  }
`;
