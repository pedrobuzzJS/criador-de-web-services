import React from "react";
import { useFetch } from "../../../hooks/useFetch";
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
        placeholder: "nome",
        label: "nome", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "rota",
        name: "rota",
        placeholder: "rota",
        label: "rota", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "parametros",
        name: "parametros",
        placeholder: "parametros",
        label: "parametros", 
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
        id: "status_id",
        name: "status_id",
        placeholder: "status_id",
        label: "status_id", 
        pixels: "250",
        type: InputType.TEXT,
    },
];

export const RotasMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("rotas", {
        params: {
            id: id
        },
    });

    const envia = () => {
    };

    return (
        <>
            <FormBuilder op={Number(op)} data={data} campos={inputs} fun={envia} urlBakc="rotas"/>
        </>
    );
};