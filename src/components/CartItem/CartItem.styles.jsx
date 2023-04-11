import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  min-height: 80px;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 30%;
  object-fit: cover;
  border: 2px solid #16161d;
`;

export const ItemDetails = styled.div`
  width: calc(70%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-size: 0.9rem;
  padding: 0 20px;
  min-width: 0;
`;

export const Name = styled.span`
  text-overflow: ellipsis;
  font-weight: normal;
`;

export const Quantity = styled.span`
  font-weight: normal;
`;

export const Price = styled.span`
  font-weight: bold;
`;
