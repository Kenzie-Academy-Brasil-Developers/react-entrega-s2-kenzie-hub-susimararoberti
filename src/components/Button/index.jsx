import { Container } from "./styles";

function Button({ children, greycolor = false, pinkcolor = false, ...rest }) {
  return (
    <Container
      greycolor={greycolor}
      pinkcolor={pinkcolor}
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
}

export default Button;
