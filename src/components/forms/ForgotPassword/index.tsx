import {
  Container,
  Logo,
  Title,
  FormContainer,
  ButtonContainer,
  RememberPassword,
  RememberContainer
} from "./styles";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";

const ForgotPasswordForm = () => {
  return (
    <Container>
      <Logo role="img" />
      <Title>Recupere sua senha</Title>

      <FormContainer>
        <FormInput type="email" placeholder="E-mail cadastrado" />
        
        <ButtonContainer>
          <FormButton title="Enviar código" />
        </ButtonContainer>
          
        <RememberContainer>
          <RememberPassword>Lembrou sua Senha?</RememberPassword>
          <FormButton alternative title="Entrar com as credenciais" />
        </RememberContainer>
  
      </FormContainer>

    </Container>
  );
};

export default ForgotPasswordForm;
