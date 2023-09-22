import {
  Container,
  Logo,
  Title,
  FormContainer,
  CheckBoxContainer,
  CheckBox,
  Label,
  ForgotPassword,
} from "./styles";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";

const LoginForm = () => {
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
        <FormButton alternative title="Criar conta" />
      </FormContainer>
      <ForgotPassword>Esqueci minha senha</ForgotPassword>
    </Container>
  );
};

export default LoginForm;
