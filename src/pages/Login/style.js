import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 2rem;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: var(--pink-1);
  }

  @media (min-width: 600px) {
    width: 70%;
    h1 {
      font-size: 20px;
    }
  }
  @media (min-width: 900px) {
    width: 60%;
    h1 {
      font-size: 22px;
    }
  }
  @media (min-width: 1200px) {
    width: 50%;
    h1 {
      font-size: 24px;
    }
  }
  @media (min-width: 1400px) {
    width: 40%;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 700px;
  background-color: var(--grey-3);
  padding: 1rem;

  h2 {
    font-size: 16px;
    color: var(--white);
    margin: 10px 0 20px 0;
  }

  form {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-size: 12px;
    color: var(--grey-1);
    margin: 5px 0;
  }

  button {
    margin: 20px 0;
    width: 90%;
    border: none;
    font-size: 16px;
  }

  a {
    font-size: 16px;
    color: var(--white);
  }

  @media (min-width: 600px) {
    width: 70%;
    h2 {
      font-size: 18px;
    }
    span {
      font-size: 13px;
    }
    button {
      font-size: 18px;
    }
    a {
      font-size: 18px;
    }
  }
  @media (min-width: 900px) {
    width: 60%;
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 14px;
    }
    button {
      font-size: 20px;
    }
    a {
      font-size: 20px;
    }
  }
  @media (min-width: 1200px) {
    width: 50%;
    h2 {
      font-size: 22px;
    }
    span {
      font-size: 15px;
    }
    button {
      font-size: 22px;
    }
    a {
      font-size: 22px;
    }
  }
  @media (min-width: 1400px) {
    width: 40%;
  }
`;
