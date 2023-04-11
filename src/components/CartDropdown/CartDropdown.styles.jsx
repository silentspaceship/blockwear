import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #16161d;
  background-color: #f5f5f5;
  top: 50px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyCartMessage = styled.span`
  font-size: 1rem;
  margin: auto;
  color: #16161d;
`;

export const ButtonCheckoutContainer = styled.div`
  margin-top: auto;
  width: 100%;
`;
