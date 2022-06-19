import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.greycolor ? "#868E96" : props.pinkcolor ? "#FF577F" : "#59323F"};
  color: var(--white);
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  margin-top: 16px;
  padding: 0;
  width: 100%;
  transition: 0.5s;
  font-size: 14px;

  :hover {
    transition: 0.5s;
    background-color: ${(props) =>
      props.greycolor ? "#212529" : props.pinkcolor ? "#59323F" : "#FF577F"};
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 900px) {
    font-size: 17px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    height: 55px;
  }
`;
