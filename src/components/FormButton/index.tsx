import {
    Title,
    Button,
  } from "./style";
  
  interface ButtonProps {
    title: string;
    type: "main" | "secundary";
  }
  
  function FormButton({ title, type }: ButtonProps) {
    return (
        <>
            {type === "main" && (
                <Button color="orange" >
                    <Title>{title}</Title>
                </Button>
            )}
            {type === "secundary" && (
                <Button color="gray">
                    <Title>{title}</Title>
                </Button>
            )}
        </>
    );
  }
  
  export default FormButton;
  