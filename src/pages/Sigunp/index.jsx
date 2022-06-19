import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Container, Header, Content } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Mínimo de 4 letras")
      .required("Nome e Sobrenome obrigatórios")
      .matches(
        /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/,
        "Primeira letra de cada nome maiúscula, " +
          "sem espaços duplos " +
          "e sem números"
      ),
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
    passwordConfirm: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const cadastrar = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error(
          "Erro ao cadastrar, verifique novamente os campos ou mude o email!"
        )
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Header>
        <h1>Kenzie Hub</h1>
        <Button greycolor>
          <Link to="/">Voltar</Link>
        </Button>
      </Header>
      <Content>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(cadastrar)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
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
          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Confirme aqui a senha"
            name="passwordConfirm"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <Input
            label="Bio"
            placeholder="Fale sobre você"
            name="bio"
            register={register}
            error={errors.bio?.message}
          />
          <Input
            label="Contato"
            placeholder="Opção de contato"
            name="contact"
            register={register}
            error={errors.contact?.message}
          />
          <Select label="Módulo" name="course_module" register={register}>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </Select>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Signup;
