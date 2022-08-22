import React, { FormEvent, FormHTMLAttributes } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Select } from "../Inputs/Select/Select";
import { Container } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    ss: string
};

export const FormBuilder: React.FC<FormProps> = ({ ...props }) => {

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <Container>
            <form action="#">
                <Input type={"cpf"} placeholder="CPF" name="cpf" label={"CPF"} id={"cpf"}/>
                <Select />
                <button onClick={handleClick} >Enviar</button>
            </form>
        </Container>
    );
}