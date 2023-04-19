import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;

  &.active {
    filter: invert(1);
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  user-select: none;

  &.active {
    filter: invert(1);
  }
`;

export const CartIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #16161d;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover > ${ShoppingIcon}, &:hover > ${ItemCount} {
    filter: invert(1);
  }

  &.active::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #16161d;
  }
`;
