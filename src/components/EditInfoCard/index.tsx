import { Container, Title, Form, Fieldset, ButtonHolder } from "./styles";
import CustomSelect from "../CustomSelect";
import FormButton from "../FormButton";
import FormInput from "../FormInput";

const EditInfoCard = () => {
  return (
    <Container>
      <Title>Editar Informações</Title>
      <Form>
        <Fieldset>
          <FormInput placeholder="Profissão" />
          <FormInput placeholder="Nome" />
          <FormInput placeholder="Cidade" />
          <FormInput placeholder="País" half />
          <FormInput
            type="date"
            max={new Date().toISOString().split("T")[0]}
            half
          />
          <FormInput placeholder="Senha" type="password" />
          <FormInput placeholder="Repetir senha" type="password" />
        </Fieldset>
        <CustomSelect
          onSelect={(text: string) => text}
          options={["teste", "teste2"]}
          placeholder="Relacionamento"
        />
        <ButtonHolder>
          <FormButton title="Salvar" />
        </ButtonHolder>
      </Form>
    </Container>
  );
};

export default EditInfoCard;
