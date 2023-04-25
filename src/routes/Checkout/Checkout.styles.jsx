import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding-bottom: 20px;

  @media screen and (max-width: 750px) {
    width: 90%;
    margin-top: 0;
  }
`;

export const CheckoutHeader = styled.div`
  font-family: "Moderat";
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;

  @media screen and (max-width: 750px) {
    font-size: 3vw;
  }
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 18%;

  &:last-child {
    width: auto;
  }
`;

export const Total = styled.span`
  font-family: "Moderat Extended";
  margin-top: 30px;
  margin-left: auto;
  font-size: 2.2rem;
`;
