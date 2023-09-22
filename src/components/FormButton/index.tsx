import { Button } from "./styles";

interface ButtonProps {
  title: string;
  alternative?: boolean;
  onClick?: () => void;
}

function FormButton({ title, alternative, onClick }: ButtonProps) {
  return (
    <>
      <Button onClick={onClick} alternative={alternative}>
        {title}
      </Button>
    </>
  );
}

export default FormButton;
