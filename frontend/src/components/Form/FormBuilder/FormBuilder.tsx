import React, { useState, FormHTMLAttributes, FormEvent, useCallback } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Button } from "../Button/Button";
import { ButtonArea, Container, FormContainer } from "./styles";
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    ss: string
};  

export const FormBuilder: React.FC<FormProps> = ({ ...props }) => {
    const [ formValues, setFormValues ] = useState({
        nome: 'Pedro Artur',
        sobrenome: 'Buzzi Pereira',
        cep: '89164-081', 
        cpf: '105.781.649-30', 
        // password: 'senha', 
        idade: '22',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value, type} = e.currentTarget;
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
    }

    const findValueById = useCallback((values: any, key: string) => {
        if (values?.hasOwnProperty(key)) {
            const data = values[key];
            return data;
        }
        return "";
    }, [])

    return (
        <Container>
            <form onSubmit={handleSubmit}>  
                <FormContainer>
                    <Input
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        label={"Nome"} 
                        id={"nome"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "nome")}
                        pixels={"260px"}
                    />
                    <Input
                        name="sobrenome"
                        type="text"
                        placeholder="Sobre-Nome"
                        label={"Sobre-Nome"} 
                        id={"sobrenome"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "sobrenome")}
                        pixels={"260px"}
                    />
                    <Input
                        name="cep"
                        type="cep"
                        placeholder="CEP"
                        label={"CEP"} 
                        id={"cep"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cep")}
                        pixels={"260px"}
                    />
                    <Input
                        name="cpf"
                        type="cpf"
                        placeholder="CPF"
                        label={"CPF"}
                        id={"cpf"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cpf")}
                        pixels={"260px"}
                    />
                    <Input
                        name="idade"
                        type="number"
                        placeholder="Idade"
                        label={"Idade"}
                        id={"idade"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "idade")}
                        pixels={"260px"}
                    />
                    {/* <div>
                        <label>
                            <input
                            name="drink"
                            type="radio"
                            value="cafe"
                            onChange={handleInputChange}
                            />
                            <span>
                                Cafe
                            </span>
                        </label>
                        <label>
                            <input
                            name="drink"
                            type="radio"
                            value="refri"
                            onChange={handleInputChange}
                            />
                            <span>
                                Refri
                            </span>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <br />
                        <textarea name="bio" id="bio" value={findValueById(formValues, "bio")}  onChange={handleTextAreaChange} />
                    </div> */}
                </FormContainer>
                <ButtonArea>
                    <Button 
                        onClick={() => console.log('***', formValues)}
                        buttonDescription="Enviar"     // size="small"
                    />
                </ButtonArea>
            </form>
        </Container>
    );
}