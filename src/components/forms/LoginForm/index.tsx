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
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: unknown) => {
    navigate("/profile");
  };

  return (
    <Container>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <FormInput type="email" placeholder="Email"
          registerField={{
            ...register("email", {
              required: { value: true, message: "O email é obrigatório!" },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Formato inválido de email!",
              },
            }),
          }}
          error={errors?.email?.message}
        />
        <FormInput type="password" placeholder="Senha"
          registerField={{
            ...register("password", {
              required: { value: true, message: "A senha é obrigatória!" },
              minLength: {
                value: 6,
                message: "A senha deve conter pelo menos 6 dígitos!",
              },
            }),
          }}
          error={errors?.password?.message}
        />
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
