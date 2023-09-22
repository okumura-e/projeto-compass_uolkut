import {
  Container,
  Logo,
  Title,
  FormContainer,
  CheckBoxContainer,
  CheckBox,
  Label,
} from "./styles";

import { Link, useNavigate } from "react-router-dom";

import FormButton from "../../FormButton";
import FormInput from "../../FormInput";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer>
        <FormInput type="email" placeholder="Email" />
        <FormInput type="password" placeholder="Senha" />
        <CheckBoxContainer>
          <CheckBox />
          <Label htmlFor="rememberMe">Lembrar minha senha</Label>
        </CheckBoxContainer>
        <FormButton title="Entrar" />
        <FormButton
          onClick={() => navigate("/register")}
          alternative
          title="Criar conta"
        />
      </FormContainer>
      <Link to="/forgot-password">Esqueci minha senha</Link>
    </Container>
  );
};

export default LoginForm;
