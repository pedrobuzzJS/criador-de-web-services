import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";

// const inputs: FormInputs[] = [
//     {
//         id: "id",
//         name: "id",
//         placeholder: "Código",
//         label: "Código", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "nome",
//         name: "nome",
//         placeholder: "nome",
//         label: "nome", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "descricao",
//         name: "descricao",
//         placeholder: "descricao",
//         label: "descricao", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "prover",
//         name: "prover",
//         placeholder: "prover",
//         label: "prover", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "consumir",
//         name: "consumir",
//         placeholder: "consumir",
//         label: "consumir", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "varsao",
//         name: "varsao",
//         placeholder: "varsao",
//         label: "varsao", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
//     {
//         id: "status_id",
//         name: "status_id",
//         placeholder: "status_id",
//         label: "status_id", 
//         pixels: "250",
//         type: InputType.TEXT,   
//     },
// ];

export const WebServicesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const [ fieldInputs, setFieldInputs ] = useState<FormInputs[]>(
        [
            {
                id: "id",
                name: "id",
                placeholder: "Código",
                label: "Código", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "nome",
                name: "nome",
                placeholder: "nome",
                label: "nome", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "descricao",
                name: "descricao",
                placeholder: "descricao",
                label: "descricao", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "prover",
                name: "prover",
                placeholder: "prover",
                label: "prover", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "consumir",
                name: "consumir",
                placeholder: "consumir",
                label: "consumir", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "varsao",
                name: "varsao",
                placeholder: "varsao",
                label: "varsao", 
                pixels: "250",
                type: InputType.TEXT,   
            },
            {
                id: "status_id",
                name: "status_id",
                placeholder: "status_id",
                label: "status_id", 
                pixels: "250",
                type: InputType.TEXT,   
            },
        ]
    );
    const { data } = useFetch<any>("webservices", {
        params: {
            id: id
        },
    });

    const envia = () => {
    };

    return (
        <FormBuilder op={Number(op)} data={data} campos={fieldInputs} fun={envia} url="webservices"/>
    );
};