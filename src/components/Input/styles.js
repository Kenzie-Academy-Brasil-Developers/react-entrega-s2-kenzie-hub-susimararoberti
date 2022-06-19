import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--grey-0);
  width: 90%;

  div {
    font-size: 12px;
    margin-bottom: 10px;

    span {
      color: var(--red);
      font-size: 12px;
      font-weight: 600;
    }
  }

  @media (min-width: 600px) {
    div {
      font-size: 13px;

      span {
        font-size: 13px;
      }
    }
  }
  @media (min-width: 900px) {
    div {
      font-size: 14px;

      span {
        font-size: 14px;
      }
    }
  }
  @media (min-width: 1200px) {
    div {
      font-size: 15px;

      span {
        font-size: 15px;
      }
    }
  }
`;

export const InputContainer = styled.div`
  background-color: var(--grey-2);
  border-radius: 4px;
  border: 2px solid var(--grey-2);
  padding: 10px;
  width: 100%;
  display: flex;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  input {
    color: var(--white);
    background-color: transparent;
    width: 100%;
    align-items: center;
    flex: 1;
    border: 0;
    &::placeholder {
      color: var(--grey-1);
      font-size: 14px;
    }
  }

  @media (min-width: 600px) {
    input {
      &::placeholder {
        font-size: 16px;
      }
    }
  }
  @media (min-width: 900px) {
    input {
      &::placeholder {
        font-size: 17px;
      }
    }
  }
  @media (min-width: 1200px) {
    input {
      &::placeholder {
        font-size: 18px;
      }
    }
  }
`;
