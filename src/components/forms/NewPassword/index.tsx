import {
  Container,
  Logo,
  Title,
  FormContainer,
  ButtonContainer,
  RememberPassword,
  RememberContainer,
  InputsContainer
} from "./styles";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";

const NewPasswordForm = () => {
  return (
    <Container>
      <Logo role="img" />
      <Title>Nova senha</Title>

      <FormContainer>
        <InputsContainer>
          <FormInput type="text" placeholder="Informe o código" />
          <FormInput type="password" placeholder="Nova senha" />
          <FormInput type="password" placeholder="Confirmar a senha" />
        </InputsContainer>
        
        <ButtonContainer>
          <FormButton title="Salvar" />
        </ButtonContainer>
          
        <RememberContainer>
          <RememberPassword>Lembrou sua Senha?</RememberPassword>
          <FormButton alternative title="Entrar com as credenciais" />
        </RememberContainer>
  
      </FormContainer>

    </Container>
  );
};

export default NewPasswordForm;
