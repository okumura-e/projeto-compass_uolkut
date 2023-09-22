import { Button } from "./styles";

interface ButtonProps {
  title: string;
  alternative?: boolean;
}

function FormButton({ title, alternative }: ButtonProps) {
  return (
    <>
      <Button alternative={alternative}>{title}</Button>
    </>
  );
}

export default FormButton;
