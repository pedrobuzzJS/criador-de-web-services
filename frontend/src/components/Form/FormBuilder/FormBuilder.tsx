import React, { useState, FormHTMLAttributes, FormEvent, useCallback, useEffect } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Button } from "../Button/Button";
import { ButtonArea, Container, FormContainer } from "./styles";
import { FormInputs } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import api from "../../../services/api";
import { Select } from "../Inputs/Select/Select";
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    op: number;
    data: any[];
    campos: FormInputs[];
    url?: any;
    fun(data: any): void;
};

export const FormBuilder: React.FC<FormProps> = ({  op, data, campos, fun, url, ...props }) => {
    const [ formValues, setFormValues ] = useState({});
    const setFormValueInitial = useEffect( () => {
        setFormValues({
            ...data?.[0]
        })
    }, [data] );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitFormToBakc();
    };

    const submitFormToBakc = () => {
        console.log(formValues);
        switch (op) {
            case Operation.INSERT:
                    try {
                        api.post(url, {
                            data: {
                                ...formValues
                            }
                        })
                    } catch (error) {
                        console.log(error);
                    }
                break;
        };
    };

    const handleClick = () => {
        // fun(formValues);
    };

    const handleInputChange = async (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value, type} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        fun(formValues);
    };

    const handleSelectListInputChange = (e: FormEvent<HTMLSelectElement>) => {
        const { name, value} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        fun(formValues);
    };

    const handleTextAreaChange = (e: FormEvent<HTMLTextAreaElement>) => {
        const { name, value} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        fun(formValues);
    };

    const handleCheckBoxChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        fun(formValues);
    };

    const findValueById = useCallback((values: any, key: any) => {
        if (values?.hasOwnProperty(key)) {
            const data = values[key];
            return data;
        }
        return "";
    }, [formValues]);

    return (
        <Container>
            <form onSubmit={handleSubmit}>  
                <FormContainer>
                    {campos?.map( (campo, index) => (
                        campo.type === "select" ?
                            <Select
                                key={index}
                                id={campo.id}
                                name={campo.name}
                                label={campo.label}
                                placeholder={campo.placeholder}
                                onChange={handleSelectListInputChange}
                                value={findValueById(formValues, campo.name)}
                                pixels={campo.pixels?.toString()}
                                disabled={campo.disabled}
                                listOptions={campo.list}
                            />
                            :
                            <Input
                                key={index}
                                id={campo.id}
                                name={campo.name}
                                type={campo.type}
                                label={campo.label}
                                placeholder={campo.placeholder}
                                onChange={handleInputChange}
                                value={findValueById(formValues, campo.name)}
                                pixels={campo.pixels?.toString()}
                                disabled={campo.disabled}
                            />
                    ) )}
                </FormContainer>
                <ButtonArea>
                    <Button 
                        onClick={handleClick}
                        buttonDescription="Enviar"
                    />
                </ButtonArea>
            </form>
        </Container>
    );
}