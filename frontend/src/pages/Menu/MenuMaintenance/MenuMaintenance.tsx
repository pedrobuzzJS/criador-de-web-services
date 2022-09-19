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
        id: "parametros",
        name: "parametros",
        placeholder: "Parametros",
        label: "Parametros", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "rota",
        name: "rota",
        placeholder: "Rota",
        label: "Rota", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "icone",
        name: "icone",
        placeholder: "Ícone",
        label: "Ícone", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "pai_id",
        name: "pai_id",
        type: InputType.CEP,
        placeholder: "Códiigo do Pai",
        label: "Códiigo do Pai", 
        pixels: "250",
    },
    {
        id: "ordem",
        name: "ordem",
        placeholder: "Ordem",
        label: "Ordem", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "desabilitado",
        name: "desabilitado",
        placeholder: "Desabilitado",
        label: "Desabilitado", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "papel",
        name: "papel",
        placeholder: "Papel",
        label: "Papel", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "permissao",
        name: "permissao",
        placeholder: "Permissao",
        label: "Permissao", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "status_id",
        name: "status_id",
        placeholder: "Status",
        label: "Status", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "component",
        name: "component",
        placeholder: "Componente",
        label: "Componente", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "possuifilhos",
        name: "possuifilhos",
        placeholder: "Possui Filhos",
        label: "Possui Filhos", 
        pixels: "250",
        type: InputType.TEXT,
    },
];

export const MenuMaintenance: React.FC = () => {
    const { id, op } = useParams();
    const { data } = useFetch<any>("menu", {
        params: {
            id: id
        },
    });

    return (
        <FormBuilder data={data} operation={Number(op)} campos={inputs} />
    );
};