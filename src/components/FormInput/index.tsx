import { InputHTMLAttributes } from "react";
import { Container, Input, ErrorText } from "./styles";

interface InputProps {
  half?: boolean;
  error?: string;
}

function FormInput({
  half,
  error,
  ...attributes
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container half={half}>
      <Input error={!!error} {...attributes}></Input>
      <ErrorText>{error}</ErrorText>
    </Container>
  );
}

export default FormInput;
