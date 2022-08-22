import React, { FormHTMLAttributes } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Container } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    ss: string
};

export const FormBuilder: React.FC<FormProps> = ({ ...props }) => {
    return (
        <Container>
            <form action="">
                <Input type={"cpf"} placeholder="CPF" name="CPF"/>
            </form>
        </Container>
    );
}