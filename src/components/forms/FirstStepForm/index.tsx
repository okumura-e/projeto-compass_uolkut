import { useForm } from "react-hook-form";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import { Container, FormContainer, Logo, Title, RowContainer } from "./styles";

import { useNavigate } from "react-router-dom";

const FirstStepForm = () => {
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
      name: "",
      birthday: "",
      job: "",
      country: "",
      city: "",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log("Dados: ", data);
    navigate("/profile");
  };

  return (
    <Container>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer
        onSubmit={handleSubmit(onSubmit, () => setTimeout(clearErrors, 2500))}
      >
        <FormInput
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
          type="email"
          placeholder="Email"
        />
        <FormInput
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
          type="password"
          placeholder="Senha"
        />
        <FormInput
          registerField={{
            ...register("name", {
              required: { value: true, message: "O nome é obrigatório!" },
            }),
          }}
          error={errors?.name?.message}
          placeholder="Nome"
        />
        <RowContainer>
          <FormInput
            registerField={{
              ...register("birthday", {
                required: { value: true, message: "Aniversário obrigatório!" },
              }),
            }}
            error={errors?.birthday?.message}
            type="date"
            placeholder="DD/MM/AAAA"
            max={new Date().toISOString().split("T")[0]}
          />
          <FormInput
            registerField={{
              ...register("job", {
                required: { value: true, message: "Profissão obrigatória!" },
              }),
            }}
            error={errors?.job?.message}
            placeholder="Profissão"
          />
        </RowContainer>
        <RowContainer>
          <FormInput
            registerField={{
              ...register("country", {
                required: { value: true, message: "País é obrigatório!" },
              }),
            }}
            error={errors?.country?.message}
            placeholder="País"
          />
          <FormInput
            registerField={{
              ...register("city", {
                required: { value: true, message: "Cidade é obrigatório!" },
              }),
            }}
            error={errors?.city?.message}
            placeholder="Cidade"
          />
        </RowContainer>
        <FormButton title="Criar conta" />
      </FormContainer>
    </Container>
  );
};

export default FirstStepForm;