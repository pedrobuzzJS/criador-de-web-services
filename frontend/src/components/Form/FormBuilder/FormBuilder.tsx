import React, { useState, FormHTMLAttributes, FormEvent, useCallback } from "react";
import Input from "../Inputs/InputDefault/InputDefault";
import { Container, FormContainer } from "./styles";
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

    const handleInputChange = (e: React.FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {

        const { name, value, type} = e.currentTarget;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const findValueById = (values: any, key: string) => {
        if (values?.hasOwnProperty(key)) {
            const data = values[key];
            return data;
        }
        return "";
    };

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
                        percent="33%"
                    />
                    <Input
                        name="sobrenome"
                        type="text"
                        placeholder="Sobre-Nome"
                        label={"Sobre-Nome"} 
                        id={"sobrenome"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "sobrenome")}
                        percent="33%"
                    />
                    <Input
                        name="cep"
                        type="cep"
                        placeholder="CEP"
                        label={"CEP"} 
                        id={"cep"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cep")}
                        percent="33%"
                    />
                    <Input
                        name="cpf"
                        type="cpf"
                        placeholder="CPF"
                        label={"CPF"}
                        id={"cpf"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "cpf")}
                        percent="33%"
                    />
                    {/* <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        label={"Senha"}
                        id={"password"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "password")}
                        percent="33%"
                    /> */}
                    <Input
                        name="idade"
                        type="number"
                        placeholder="Idade"
                        label={"Idade"}
                        id={"idade"}
                        onChange={handleInputChange}
                        value={findValueById(formValues, "idade")}
                        percent="50%"
                    />

                    {/* <div>
                        <label>
                            <input
                            name="drink"
                            type="radio"
                            value="cafe"
                            onChange={handleInputChange}
                            // checked={formValues?.drink === "cafe" ?? true}
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
                            // checked={formValues.drink === "refri" ?? true}
                            />
                            <span>
                                Refri
                            </span>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" value={findValueById(formValues, "bio")}  onChange={handleInputChange} /> */}
                    {/* </div> */}

                    <button className="button" onClick={() => console.log('***', formValues)}>
                    Enviar
                    </button>
                </FormContainer>  
            </form>
        </Container>
    );
}