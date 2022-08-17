import React, { FormHTMLAttributes, useRef, useState } from "react";
import { Container, FormContainer } from "./style";
import Input from "../Inputs/InputDefault/InputDefault";

interface FormData extends FormHTMLAttributes<HTMLFormElement> {

}

export const FormBuilder: React.FC<FormData> = ({...props}) => {
    const [ fields, setFields ] = useState({});
    const [ formData, setFormData ] = useState({});
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Container>
            <FormContainer ref={formRef} >
                    <Input type="text" name="texto" id="texto" placeholder="Texto"/>
                    <Input type="password" placeholder="Password" name="senha" id="senha"/>
                    <Input type="file" name="arquivo" id="arquivo"/>
            </FormContainer>
        </Container>
    );
}