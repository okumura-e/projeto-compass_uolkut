import {
    Input,
  } from "./styles";
  
  interface InputProps {
    placeHolder: string;
    inputType: 'text' | 'password' | 'email' | 'date' ;
    fullLength: boolean
  }
  
  function FormInput({ placeHolder, inputType, fullLength }: InputProps) {
    return (
        <>
            <Input placeholder={placeHolder} type={inputType} full={fullLength}></Input>
        </>
    );
  }
  
  export default FormInput;
  