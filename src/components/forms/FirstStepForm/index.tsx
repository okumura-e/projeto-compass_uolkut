import { useRef } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../../config/api";
import toast from "react-hot-toast";
import FormButton from "../../FormButton";
import FormInput from "../../FormInput";
import {
  FormContainer,
  Logo,
  Title,
  RowContainer,
  ButtonContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";
import CustomSelect from "../../CustomSelect";
import BlankCard from "../../cards/BlankCard";

const FirstStepForm = () => {
  const navigate = useNavigate();
  const {
    clearErrors,
    formState: { errors, isSubmitting },
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

  const selectRef = useRef({} as { value: string; hasError: boolean });

  const handleError = () => {
    if (!selectRef.current.value) {
      selectRef.current.hasError = true;
    }
    setTimeout(() => {
      selectRef.current.hasError = false;
      clearErrors();
    }, 2500);
  };

  const onSubmit = async (data: unknown) => {
    if (!selectRef.current.value) {
      selectRef.current.hasError = true;
      setTimeout(() => (selectRef.current.hasError = false), 2500);
      return;
    }
    try {
      const response = await api.post("/users", {
        ...data,
        maritalStatus: selectRef.current.value,
      });

      if (response.status !== 201) {
        toast.error("Erro de servidor, por favor, tente novamente!");
        return;
      }
      navigate("/profile");
    } catch (err) {
      toast.error("Erro de servidor, por favor, tente novamente!");
    }
  };

  return (
    <BlankCard>
      <Logo role="img" />
      <Title>Cadastre-se no UOLkut</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit, handleError)}>
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
        <CustomSelect
          selected={selectRef.current.value}
          onSelect={(text) => {
            selectRef.current.value = text;
          }}
          options={[
            "Solteiro",
            "Casado",
            "Divorciado",
            "Namorando",
            "Preocupado",
          ]}
          placeholder="Relacionamento"
          hasError={selectRef.current.hasError}
        />
        <ButtonContainer>
          <FormButton
            disabled={isSubmitting}
            isLoading={isSubmitting}
            title="Criar conta"
          />
        </ButtonContainer>
      </FormContainer>
    </BlankCard>
  );
};

export default FirstStepForm;
