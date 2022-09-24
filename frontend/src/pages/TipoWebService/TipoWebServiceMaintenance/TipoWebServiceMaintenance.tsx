import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
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
        id: "sigla",
        name: "sigla",
        placeholder: "Sigla",
        label: "Sigla", 
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

export const TipoWebServiceMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("tipowebservice", {
        params: {
            id: id
        },
    });

    return (
        <FormBuilder op={Number(op)} data={data} campos={inputs} fun={() => console.log("nada")} />
    );
};