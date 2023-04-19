import styled from "styled-components";

import { Link } from "react-router-dom";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: #16161d;
  position: absolute;

  h2 {
    font-family: "Moderat Extended";
    text-transform: capitalize;
    letter-spacing: 1px;
    margin: 0.5rem 1.5rem;
    font-size: 2.5vw;

    color: #f5f5f5;

    @media screen and (max-width: 600px) {
      font-size: 4vw;
      margin: 0 0.25rem 0;
    }
  }
`;

export const DirectoryItemContainer = styled(Link)`
  position: relative;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: left;
  border: 2px solid #16161d;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.05);
      transition: transform 0.1s ease;
    }

    & ${Body} {
      width: 100%;
    }
  }

  &.large {
    height: 380px;
  }
`;
