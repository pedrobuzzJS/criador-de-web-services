import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { TabelasQuery } from "../../Tabelas/TabelasQuery/TabelasQuery";

const inputs: FormInputs[] = [
    {
        id: "id",
        name: "id",
        placeholder: "Código",
        label: "Código", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "nome",
        name: "nome",
        placeholder: "nome",
        label: "nome", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "user",
        name: "user",
        placeholder: "user",
        label: "user", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "password",
        name: "password",
        placeholder: "password",
        label: "password", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "db_connection",
        name: "db_connection",
        placeholder: "db_connection",
        label: "db_connection", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "host",
        name: "host",
        placeholder: "host",
        label: "host", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "emp",
        name: "emp",
        placeholder: "emp",
        label: "emp", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "fil",
        name: "fil",
        placeholder: "fil",
        label: "fil", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "tipobase_id",
        name: "tipobase_id",
        placeholder: "tipobase_id",
        label: "tipobase_id", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "url",
        name: "url",
        placeholder: "url",
        label: "url", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "ip",
        name: "ip",
        placeholder: "ip",
        label: "ip", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "permissao",
        name: "permissao",
        placeholder: "permissao",
        label: "permissao", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
    {
        id: "status_id",
        name: "status_id",
        placeholder: "status_id",
        label: "status_id", 
        pixels: "250",
        type: InputType.TEXT,
        disabled: true,
    },
];

export const BasesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("base", {
        params: {
            id: id
        },
    });

    const envia = () => {
    };

    return (
        <>
            <FormBuilder operation={Number(op)} data={data} campos={inputs} fun={envia}/>
            <TabelasQuery />
        </>
    );
};