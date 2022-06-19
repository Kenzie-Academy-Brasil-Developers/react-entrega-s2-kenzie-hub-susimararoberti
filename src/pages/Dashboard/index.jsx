import {
  Container,
  Header,
  InputContainer,
  Insert,
  Itens,
  Technologies,
  User,
} from "./style";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import List from "../../components/List";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import Select from "../../components/Select";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

function Dashboard() {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tecs, setTecs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, "Mínimo de 2 letras")
      .required("Informe uma tecnologia"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (localStorage.getItem("UserkenzieHub")) {
    var { name, course_module, id } = JSON.parse(
      localStorage.getItem("UserkenzieHub")
    );
  }

  function loadTecs() {
    if (id) {
      api
        .get(`/users/${id}`)
        .then((response) => setTecs(response.data.techs))
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    loadTecs();
  });

  if (!token) {
    return history.push("./");
  }

  const insert = ({ title, status }) => {
    if (!{ title, status }) {
      return toast.error("Preencha o campo e selecione o status!");
    }

    onClose();

    const tec = { title, status };
    api
      .post("/users/techs", tec, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTecs([...tecs, response.data]), toast)
      .then((resp) => toast.success("Cadastrado com sucesso!"))
      .catch((err) => console.log(err));
  };

  const editEntry = (obj) => {
    api
      .put(
        `/users/techs/${obj.id}`,
        { status: obj.status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Alterado com sucesso"))
      .catch((err) => console.log(err));
  };

  const deleteEntry = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => toast.success("Excluído com sucesso"))
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("UserkenzieHub");
    localStorage.removeItem("@KenzieHub:token");
    return history.push("/");
  };

  return (
    <>
      <Container>
        <Header>
          <h1>Kenzie Hub</h1>
          <Button onClick={logout} greycolor>
            Sair
          </Button>
        </Header>
        <User>
          <div>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
          </div>
        </User>
        <Technologies>
          <Insert>
            <h3>Tecnologias</h3>
            <Button greycolor onClick={onOpen}>
              +
            </Button>
          </Insert>
          <Itens>
            <ul>
              {tecs.map((tec) => (
                <List
                  key={tec.id}
                  id={tec.id}
                  title={tec.title}
                  status={tec.status}
                  deleteFunction={deleteEntry}
                  editFunction={editEntry}
                />
              ))}
            </ul>
          </Itens>
        </Technologies>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} bgColor={"var(--grey-3)"}>
          <Box>
            <ModalHeader
              bgColor={"var(--grey-2)"}
              fontSize={["14px", "16px", "18px"]}
            >
              Cadastrar Tecnologia
            </ModalHeader>
            <ModalCloseButton />
          </Box>
          <ModalBody>
            <InputContainer onSubmit={handleSubmit(insert)}>
              <article>
                <Input
                  label="Tecnologia"
                  placeholder="Informe uma tecnologia"
                  register={register}
                  name="title"
                  error={errors.title?.message}
                />
                <Select label="Status" name="status" register={register}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Select>
                <Button pinkcolor type="submit">
                  Cadastrar Tecnologia
                </Button>
              </article>
            </InputContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Dashboard;
