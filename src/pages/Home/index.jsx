import { Container, Content } from "./style";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const token = localStorage.getItem("@KenzieHub:token") || "";

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <h1>Kenzie Hub</h1>
        <span>O melhor portifólio de tecnologias!</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} greycolor>
            Cadastro
          </Button>
          <Button onClick={() => handleNavigation("/login")} pinkcolor>
            Login
          </Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
