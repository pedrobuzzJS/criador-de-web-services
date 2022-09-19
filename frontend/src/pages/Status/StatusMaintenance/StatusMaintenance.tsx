import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Status } from "../../../@types/status";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
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
        id: "nome",
        name: "nome",
        placeholder: "Nome",
        label: "Nome", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "descricao",
        name: "descricao",
        placeholder: "Descricao",
        label: "Descricao", 
        pixels: "250",
        type: InputType.TEXT,
    },
];

export const StatusMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<any>("status", {
        params: {
            id: id
        },
    });

    return (
        <FormBuilder operation={Number(op)} data={data} campos={inputs}/>
    );
};