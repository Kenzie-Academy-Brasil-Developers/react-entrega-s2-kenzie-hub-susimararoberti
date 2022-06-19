import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--grey-0);
  width: 90%;

  div {
    font-size: 12px;
    margin-bottom: 10px;
  }
  @media (min-width: 600px) {
    div {
      font-size: 13px;
    }
  }
  @media (min-width: 900px) {
    div {
      font-size: 14px;
    }
  }
  @media (min-width: 1200px) {
    div {
      font-size: 15px;
    }
  }
`;

export const SelectContainer = styled.select`
  background-color: var(--grey-2);
  color: var(--grey-1);
  border-radius: 4px;
  border: none;
  padding: 10px;
  width: 100%;
  display: flex;
  font-size: 14px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 900px) {
    font-size: 17px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
