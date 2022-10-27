import React, { useState } from "react";
import { FormBuilder } from "../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../Utils/FormFields";
import { Container, L1, L2 } from "./styles";

export const Login: React.FC = () => {
    const [ inputs, setInputs ]  = useState<FormInputs[]>(
        [
            {
                id: "email",
                name: "email",
                placeholder: "E-mail",
                label: "E-mail", 
                pixels: "250",
                type: InputType.EMAIL,
            },
            {
                id: "password",
                name: "password",
                placeholder: "Senha",
                label: "Senha", 
                pixels: "250",
                type: InputType.PASSWORD,
            }
        ]
    );

    return (
        <Container>
            <L1>
                <FormBuilder
                    op={2}
                    data={[]}
                    campos={inputs}
                    fun={() => console.log("foi")}
                    // urlBakc="rotas"
                />
            </L1>
            <L2>

            </L2>
        </Container>
    );
};