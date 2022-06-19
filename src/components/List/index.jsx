import Button from "../Button";
import { Item } from "./style";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { Button as ChakraButton } from "@chakra-ui/react";
import { InputContainer } from "../../pages/Dashboard/style";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";

function List({ title, status, editFunction, deleteFunction, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm({});

  const edit = (obj) => {
    editFunction(obj);
    onClose();
  };

  const handleDelete = (id) => {
    deleteFunction(id);
    onClose();
  };

  return (
    <>
      <Item>
        <p>{title}</p>
        <div>
          <span>{status}</span>
          <div>
            <Button onClick={onOpen} pinkcolor>
              <EditIcon w={[3, 4, 5]} h={[3, 4, 5]} />
            </Button>
            <Button onClick={() => deleteFunction(id)} greycolor>
              <DeleteIcon w={[3, 4, 5]} h={[3, 4, 5]} />
            </Button>
          </div>
        </div>
      </Item>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={"var(--grey-3)"}>
          <Box>
            <ModalHeader
              color={"white"}
              bgColor={"var(--grey-2)"}
              fontSize={["14px", "16px", "18px"]}
            >
              Cadastrar Tecnologia
              <ModalCloseButton />
            </ModalHeader>
          </Box>
          <ModalBody>
            <InputContainer onSubmit={handleSubmit(edit)}>
              <article>
                <Input
                  label="Tecnologia"
                  name="title"
                  value={title}
                  disabled
                  register={() => {}}
                />
                <input
                  type="text"
                  value={id}
                  hidden
                  name={"id"}
                  {...register("id")}
                />
                <Select label="Status" name="status" register={register}>
                  {/* defaultvalue não funciona */}
                  <option
                    selected={status === "Iniciante" ? true : false}
                    value="Iniciante"
                  >
                    Iniciante
                  </option>
                  <option
                    selected={status === "Intermediário" ? true : false}
                    value="Intermediário"
                  >
                    Intermediário
                  </option>
                  <option
                    selected={status === "Avançado" ? true : false}
                    value="Avançado"
                  >
                    Avançado
                  </option>
                </Select>
                <Box
                  display={"flex"}
                  width={"100%"}
                  flexDirection="row !important"
                  pt={"16px"}
                  gap={"5px"}
                >
                  <ChakraButton
                    w={"60% !important"}
                    bg={"var(--pink-negative)"}
                    type="submit"
                    color={"white"}
                  >
                    Salvar alterações
                  </ChakraButton>
                  <ChakraButton
                    color={"white"}
                    bg={"var(--grey-1)"}
                    w={"40% !important"}
                    onClick={() => handleDelete(id)}
                  >
                    Excluir
                  </ChakraButton>
                </Box>
              </article>
            </InputContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default List;
