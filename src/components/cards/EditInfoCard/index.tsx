import { Title, Form, Fieldset, ButtonHolder } from "./styles";
import CustomSelect from "../../CustomSelect";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import BlankCard from "../BlankCard";

const EditInfoCard = () => {
  return (
    <BlankCard>
      <Title>Editar Informações</Title>
      <Form>
        {/* <InputsHolder> */}
        <Fieldset>
          <FormInput placeholder="Profissão" />
          <CustomSelect
            onSelect={(text: string) => text}
            options={["teste", "teste2"]}
            placeholder="Relacionamento"
          />
        </Fieldset>
        <Fieldset>
          <FormInput placeholder="Nome" />
          <FormInput placeholder="Cidade" />
        </Fieldset>
        <Fieldset>
          <FormInput placeholder="País" />
          <FormInput type="date" max={new Date().toISOString().split("T")[0]} />
        </Fieldset>
        <Fieldset>
          <FormInput placeholder="Senha" type="password" />
          <FormInput placeholder="Repetir senha" type="password" />
        </Fieldset>
        {/* </InputsHolder> */}
        <ButtonHolder>
          <FormButton title="Salvar" />
        </ButtonHolder>
      </Form>
    </BlankCard>
  );
};

export default EditInfoCard;
