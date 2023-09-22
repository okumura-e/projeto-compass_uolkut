import {
  Container,
  Logo,
  Title,
  FormContainer,
  ButtonContainer,
  RememberPassword,
  RememberContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";

import FormButton from "../../FormButton";
import FormInput from "../../FormInput";

const ForgotPasswordForm = () => {
  const handleSubmit = () => {
    navigate("/new-password");
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Logo role="img" />
      <Title>Recupere sua senha</Title>

      <FormContainer>
        <FormInput type="email" placeholder="E-mail cadastrado" />

        <ButtonContainer>
          <FormButton title="Enviar código" onClick={handleSubmit} />
        </ButtonContainer>

        <RememberContainer>
          <RememberPassword>Lembrou sua Senha?</RememberPassword>
          <FormButton
            onClick={() => navigate("/login")}
            alternative
            title="Entrar com as credenciais"
          />
        </RememberContainer>
      </FormContainer>
    </Container>
  );
};

export default ForgotPasswordForm;
