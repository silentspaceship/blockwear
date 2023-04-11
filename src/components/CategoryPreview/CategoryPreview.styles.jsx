import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0 20px;
`;

export const TitleContainer = styled.h2`
  margin-bottom: 10px;
`;

export const Title = styled(Link)`
  font-family: "Moderat Extended";
  font-size: 2.5rem;
  text-transform: capitalize;
  width: fit-content;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;

  &:hover {
    color: #f5f5f5 !important;
  }

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
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
`;
