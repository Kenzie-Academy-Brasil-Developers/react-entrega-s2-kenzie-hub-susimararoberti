import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--grey-4);
  border-radius: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
    padding: 5px 0;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 55%;

    span {
      font-size: 12px;
      color: var(--grey-1);
      padding: 5px 0;
      width: 60%;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 40%;

      button + button {
        margin-left: 2px;
      }
      button {
        font-size: 6px;
        width: 45%;
        height: 25px;
        margin: 0;
      }
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 16px;
    }
    div {
      width: 50%;
      span {
        font-size: 14px;
        width: 70%;
      }
      div {
        width: 30%;
        button {
          width: 43%;
          height: 30px;
        }
      }
    }
  }
  @media (min-width: 900px) {
    p {
      font-size: 18px;
    }
    div {
      span {
        font-size: 16px;
      }
      div {
        button {
          width: 40%;
          height: 34px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    p {
      font-size: 20px;
    }
    div {
      span {
        font-size: 18px;
      }
      div {
        button {
          width: 36%;
          height: 38px;
        }
      }
    }
  }
`;
