import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;

  button {
    width: 80%;
    max-width: 300px;
    position: absolute;
    bottom: 5rem;
    display: none;

    @media screen and (max-width: 700px) {
      width: 100%;
      bottom: 20%;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
      transition: transform 0.1s ease;
    }

    button {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  border: 2px solid #16161d;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-family: "Moderat Extended";
  text-transform: capitalize;
  color: #16161d;

  background-color: #f5f5f5;
  border: 2px solid #16161d;
  border-top: 0;

  align-items: center;

  padding: 1rem 1.5rem;

  @media screen and (max-width: 700px) {
    padding: 0 0.25rem;
    min-height: 20%;
  }
`;

export const Name = styled.span`
  font-size: min(3vw, 1rem);
`;
export const Price = styled.span`
  font-size: min(3vw, 1rem);
`;
