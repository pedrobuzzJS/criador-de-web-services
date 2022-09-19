import React, { useState, FormHTMLAttributes, FormEvent, useCallback, useEffect } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Button } from "../Button/Button";
// import { Select } from "../Inputs/Select/Select";
// import { SelectList } from "../../../Utils/SelectList";
import { ButtonArea, Container, FormContainer } from "./styles";
// import { CheckBox } from "../Inputs/CheckBox/CheckBox";
import { FormInputs } from "../../../Utils/FormFields";
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    operation: number;
    data: any[];
    campos: FormInputs[];
};  

// const list: SelectList[] = [
//     {
//         key: "1",
//         value: "Aston Martin",
//     },
//     {
//         key: "2",
//         value: "Lamborgini Urus",
//     },
//     {
//         key: "3",
//         value: "BMW X-6",
//     },
//     {
//         key: "4",
//         value: "Porshe Panamera",
//     },
// ];

export const FormBuilder: React.FC<FormProps> = ({  operation, data, campos, ...props }) => {
    const [ formValues, setFormValues ] = useState({});
    const setFormValueInitial = useEffect( () => {
        setFormValues({
            ...data?.[0]
        })
    }, [data] );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value, type} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSelectListInputChange = (e: FormEvent<HTMLSelectElement>) => {
        const { name, value} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleTextAreaChange = (e: FormEvent<HTMLTextAreaElement>) => {
        const { name, value} = e.currentTarget;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleCheckBoxChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
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
                        />
                    ) )}
                    {/* <Input
                        name="nodawdawme"
                        type="text"
                        placeholder="nodawdawme"
                        label={"nodawdawme"} 
                        id={"nodawdawme"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "nodawdawme")}
                        pixels={"600"}
                    /> */}
                    {/* <Input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        label={"Nome"} 
                        id={"nome"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "nome")}
                        pixels={600}
                    />
                    <Input
                        name="sobrenome"
                        type="text"
                        placeholder="Sobre-Nome"
                        label={"Sobre-Nome"} 
                        id={"sobrenome"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "sobrenome")}
                        pixels={600}
                    />
                    <Input
                        name="cep"
                        type="cep"
                        placeholder="CEP"
                        label={"CEP"} 
                        id={"cep"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cep")}
                        pixels={600}
                    />
                    <Input
                        name="cpf"
                        type="cpf"
                        placeholder="CPF"
                        label={"CPF"}
                        id={"cpf"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cpf")}
                        pixels={600}
                    />
                    <Input
                        name="idade"
                        type="number"
                        placeholder="Idade"
                        label={"Idade"}
                        id={"idade"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "idade")}
                        pixels={600}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Idade"
                        label={"Senha"}
                        id={"password"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "password")}
                        pixels={600}
                    />
                    <Select 
                        id="cars" 
                        name="cars"
                        label="Carros"
                        value={findValueById(formValues, "cars")}
                        options={list}
                        onChange={handleSelectListInputChange}
                        pixels={600}
                    />
                    <CheckBox
                        id="cb"
                        name="cb"
                        label="Caixa Selecionável"
                    /> */}
                </FormContainer>
                <ButtonArea>
                    <Button 
                        onClick={() => console.log('***', formValues)}
                        buttonDescription="Enviar"
                    />
                </ButtonArea>
            </form>
        </Container>
    );
}