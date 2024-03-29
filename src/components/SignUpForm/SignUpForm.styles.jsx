import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 0 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const SignUpMessage = styled.span`
  font-size: 0.9rem;
  font-weight: 100;
`;
