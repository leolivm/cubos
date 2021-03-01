import styled from "styled-components";

export const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.5;
    }
  }
`;
