import React from "react";
import { useParams } from "react-router-dom";
import { LinkMenu } from "../../../@types/menu";
import { useFetch } from "../../../hooks/useFetch";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { GridFields } from "../../../Utils/Fields";
import { FormInputs, InputType } from "../../../Utils/FormFields";

const inputs: FormInputs[] = [
    {
        id: "id",
        name: "id",
        type: InputType.TEXT,
        placeholder: "Código",
        label: "Código", 
        pixels: "250",
    },
    {
        id: "nome",
        name: "nome",
        type: InputType.TEXT,
        placeholder: "Nome",
        label: "Nome", 
        pixels: "250",
    },
    {
        id: "parametros",
        name: "parametros",
        type: InputType.TEXT,
        placeholder: "Parametros",
        label: "Parametros", 
        pixels: "250",
    },
    {
        id: "rota",
        name: "rota",
        type: InputType.TEXT,
        placeholder: "Rota",
        label: "Rota", 
        pixels: "250",
    },
    {
        id: "icone",
        name: "icone",
        type: InputType.TEXT,
        placeholder: "Ícone",
        label: "Ícone", 
        pixels: "250",
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
        type: InputType.TEXT,
        placeholder: "Ordem",
        label: "Ordem", 
        pixels: "250",
    },
    {
        id: "desabilitado",
        name: "desabilitado",
        type: InputType.TEXT,
        placeholder: "Desabilitado",
        label: "Desabilitado", 
        pixels: "250",
    },
    {
        id: "papel",
        name: "papel",
        type: InputType.TEXT,
        placeholder: "Papel",
        label: "Papel", 
        pixels: "250",
    },
    {
        id: "permissao",
        name: "permissao",
        type: InputType.TEXT,
        placeholder: "Permissao",
        label: "Permissao", 
        pixels: "250",
    },
    {
        id: "status_id",
        name: "status_id",
        type: InputType.TEXT,
        placeholder: "Status",
        label: "Status", 
        pixels: "250",
    },
    {
        id: "component",
        name: "component",
        type: InputType.TEXT,
        placeholder: "Componente",
        label: "Componente", 
        pixels: "250",
    },
    {
        id: "possuifilhos",
        name: "possuifilhos",
        type: InputType.TEXT,
        placeholder: "Possui Filhos",
        label: "Possui Filhos", 
        pixels: "250",
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
}