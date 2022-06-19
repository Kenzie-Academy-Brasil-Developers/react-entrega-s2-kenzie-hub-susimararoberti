import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, Header, Content } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Informe uma senha")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
          "uma letra maiúscula e uma letra minúscula, " +
          "um número e um caracter especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const cadastrar = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

        localStorage.setItem("UserkenzieHub", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/dashboard");
      })

      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Header>
        <h1>Kenzie Hub</h1>
      </Header>
      <Content>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(cadastrar)}>
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Button pinkcolor type="submit">
            Entrar
          </Button>
          <span>Ainda não possui uma conta?</span>
          <Button greycolor>
            <Link to="/signup">Cadastre-se</Link>
          </Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
