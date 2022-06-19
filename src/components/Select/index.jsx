import { Container, SelectContainer } from "./styles";

function Select({ children, label, register, name }) {
  return (
    <Container>
      <div>{label}</div>
      <SelectContainer {...register(name)}>{children}</SelectContainer>
    </Container>
  );
}

export default Select;
