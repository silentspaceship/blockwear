import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 0 20px;
  margin-bottom: 20px;
  // box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const SignInMessage = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;
