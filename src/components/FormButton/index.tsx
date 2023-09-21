import {
    Button,
  } from "./style";
  
  interface ButtonProps {
    title: string;
    secundary: boolean;
  }
  
  function FormButton({ title, secundary }: ButtonProps) {
    return (
        <>
            <Button secundary={secundary}>
                {title}
            </Button>
        </>
    );
  }
  
  export default FormButton;
  