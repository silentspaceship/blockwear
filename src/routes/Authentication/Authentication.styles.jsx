import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 900px;
  // padding: 20px 0;
  margin: 2rem auto;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: auto;
    gap: 2rem;
    align-items: center;
  }
`;
