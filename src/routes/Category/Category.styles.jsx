import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-family: "Moderat Extended";
  font-size: 2.5rem;
  text-transform: capitalize;
  width: fit-content;
  position: relative;
  color: #f5f5f5;
  margin-bottom: 10px;

  &::after {
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

export const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    // row-gap: 20px;
  }
`;
