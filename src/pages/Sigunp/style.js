import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding-top: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 18px;
    font-weight: 600;
    color: var(--pink-1);
  }
  button {
    width: 25%;
    margin-top: 0;
    height: 35px;
    font-size: 10px;
  }
  a {
    font-size: 12px;
    color: var(--white);
  }

  @media (min-width: 600px) {
    width: 70%;
    padding-top: 1.5rem;

    h1 {
      font-size: 20px;
    }
    button {
      width: 25%;
      height: 38px;
      font-size: 12px;
    }
    a {
      font-size: 14px;
    }
  }

  @media (min-width: 900px) {
    width: 60%;
    padding-top: 2rem;
    h1 {
      font-size: 22px;
    }
    button {
      width: 25%;
      height: 40px;
      font-size: 14px;
    }
    a {
      font-size: 16px;
    }
  }

  @media (min-width: 1200px) {
    width: 50%;
    padding-top: 2.5rem;
    h1 {
      font-size: 24px;
    }
    button {
      width: 25%;
      height: 42px;
      font-size: 16px;
    }
    a {
      font-size: 18px;
    }
  }

  @media (min-width: 1400px) {
    width: 40%;
    padding-top: 3rem;
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
    font-size: 15px;
    color: var(--white);
    margin: 10px 0 20px 0;
  }

  span {
    font-size: 12px;
    color: var(--grey-1);
  }
  form {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 20px;
    width: 90%;
    border: none;
    font-size: 16px;
  }

  @media (min-width: 600px) {
    width: 70%;
    h2 {
      font-size: 16px;
    }

    span {
      font-size: 13px;
    }
    button {
      font-size: 18px;
    }
  }

  @media (min-width: 900px) {
    width: 60%;
    h2 {
      font-size: 17px;
    }
    span {
      font-size: 14px;
    }
    button {
      font-size: 20px;
    }
  }

  @media (min-width: 1200px) {
    width: 50%;
    h2 {
      font-size: 18px;
    }
    span {
      font-size: 15px;
    }
    button {
      font-size: 22px;
    }
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;
