import {
    Button,
  } from "./style";
  
  interface ButtonProps {
    title: string;
    type: "main" | "secundary";
  }
  
  function FormButton({ title, type }: ButtonProps) {
    return (
        <>
            <Button color={type}>
                {title}
            </Button>
        </>
    );
  }
  
  export default FormButton;
  