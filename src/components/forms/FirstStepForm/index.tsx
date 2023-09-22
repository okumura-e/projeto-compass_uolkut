import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { Container, FormContainer, Logo, Title, RowContainer } from "./styles";

const FirstStepForm = () => {
  return (
    <Container>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer>
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Senha" />
        <FormInput placeholder="Nome" />
        <RowContainer>
          <FormInput
            type="date"
            placeholder="DD/MM/AAAA"
            max={new Date().toISOString().split("T")[0]}
          />
          <FormInput placeholder="Profissão" />
        </RowContainer>
        <RowContainer>
          <FormInput placeholder="País" />
          <FormInput placeholder="Cidade" />
        </RowContainer>
        <FormButton title="Criar conta" />
      </FormContainer>
    </Container>
  );
};

export default FirstStepForm;
