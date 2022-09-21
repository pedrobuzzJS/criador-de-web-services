import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Button } from "../../../components/Form/Button/Button";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { Table } from "../../../@types/table";
import { Operation } from "../../../Utils/Operations";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { TabelasQuery } from "../../Tabelas/TabelasQuery/TabelasQuery";

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
        id: "user",
        name: "user",
        placeholder: "user",
        label: "user", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "password",
        name: "password",
        placeholder: "password",
        label: "password", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "db_connection",
        name: "db_connection",
        placeholder: "db_connection",
        label: "db_connection", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "host",
        name: "host",
        placeholder: "host",
        label: "host", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "emp",
        name: "emp",
        placeholder: "emp",
        label: "emp", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "fil",
        name: "fil",
        placeholder: "fil",
        label: "fil", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "tipobase_id",
        name: "tipobase_id",
        placeholder: "tipobase_id",
        label: "tipobase_id", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "url",
        name: "url",
        placeholder: "url",
        label: "url", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "ip",
        name: "ip",
        placeholder: "ip",
        label: "ip", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "permissao",
        name: "permissao",
        placeholder: "permissao",
        label: "permissao", 
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

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        tittle: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT
    },
    {
        field: "scheme",
        tittle: "scheme",
        description: "scheme",
        type: FieldTypes.TEXT
    },
    {
        field: "base_id",
        tittle: "base_id",
        description: "base_id",
        type: FieldTypes.TEXT
    },
    {
        field: "permissao",
        tittle: "permissao",
        description: "permissao",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        tittle: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT
    },
    {
        field: "scheme",
        tittle: "scheme",
        description: "scheme",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "tabelas",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tabelas"
            },
            {
                button: "tabelas",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tabelas"
            },
            {
                button: "tabelas",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tabelas"
            },
        ]
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