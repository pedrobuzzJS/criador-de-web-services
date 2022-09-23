import React from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";

const inputs: FormInputs[] = [
    {
        id: "id",
        name: "id",
        placeholder: "Código",
        label: "Código", 
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
        id: "metodo",
        name: "metodo",
        placeholder: "metodo",
        label: "metodo", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "created_at",
        name: "created_at",
        placeholder: "created_at",
        label: "created_at", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "updated_at",
        name: "updated_at",
        placeholder: "updated_at",
        label: "updated_at", 
        pixels: "250",
        type: InputType.TEXT,
    }
];

export const AcoesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("acoes", {
        params: {
            id: id
        },
    });

    const envia = () => {
    };

    return (
        <FormBuilder operation={Number(op)} data={data} campos={inputs} fun={envia}/>
    );
};