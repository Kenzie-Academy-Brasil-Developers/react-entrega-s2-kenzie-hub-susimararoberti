import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-bottom: 2rem;

  h1 {
    font-size: 18px;
    color: var(--pink-1);
    font-weight: 600;
  }
  button {
    width: 25%;
    margin-top: 0;
    height: 35px;
    font-size: 12px;
  }
  a {
    color: var(--white);
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 20px;
    }
    button {
      width: 22%;
      font-size: 14px;
    }
  }
  @media (min-width: 900px) {
    width: 70%;
    h1 {
      font-size: 22px;
    }
    button {
      width: 18%;
      height: 38px;
      font-size: 16px;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 24px;
    }
    button {
      width: 15%;
      height: 40px;
      font-size: 18px;
    }
  }
`;

export const User = styled.article`
  border-top: 2px solid var(--grey-3);
  border-bottom: 2px solid var(--grey-3);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 80%;

    h2 {
      font-size: 16px;
      color: var(--grey-0);
      margin: 1.5rem 0 1rem 0;
    }
    p {
      font-size: 14px;
      color: var(--grey-1);
      margin: 0 0 1.5rem 0;
    }
  }

  @media (min-width: 600px) {
    div {
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  @media (min-width: 900px) {
    div {
      width: 70%;
      h2 {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (min-width: 1200px) {
    div {
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;

export const Technologies = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Insert = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 2rem 0;

  h3 {
    font-size: 14px;
    font-weight: 600;
    width: 50%;
    color: var(--grey-1);
  }
  button {
    width: 10%;
    height: 35px;
    margin: 0;
    font-size: 14px;
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 16px;
    }
    button {
      font-size: 16px;
    }
  }
  @media (min-width: 900px) {
    width: 70%;
    h3 {
      font-size: 18px;
    }
    button {
      width: 8%;
      height: 38px;
      font-size: 18px;
    }
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 20px;
    }
    button {
      height: 40px;
      font-size: 22px;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: var(--grey-3);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 0.3rem 0;
    margin: 0.7rem 0;
  }

  @media (min-width: 900px) {
    width: 70%;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > div {
      display: flex;
      flex-direction: column;
      width: 80%;
    }
    button {
      width: 80%;
      border: none;
    }
  }
`;
