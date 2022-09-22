import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Bases } from "../../../@types/base";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        tittle: "nome",
        description: "nome",
        type: FieldTypes.TEXT
    },
    {
        field: "user",
        tittle: "user",
        description: "user",
        type: FieldTypes.TEXT
    },
    // {
    //     field: "password",
    //     tittle: "password",
    //     description: "password",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "db_connection",
    //     tittle: "db_connection",
    //     description: "db_connection",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "host",
    //     tittle: "host",
    //     description: "host",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "emp",
    //     tittle: "emp",
    //     description: "emp",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "fil",
    //     tittle: "fil",
    //     description: "fil",
    //     type: FieldTypes.TEXT
    // },
    {
        field: "tipobase_id",
        tittle: "tipobase_id",
        description: "tipobase_id",
        type: FieldTypes.TEXT
    },
    // {
    //     field: "url",
    //     tittle: "url",
    //     description: "url",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "ip",
    //     tittle: "ip",
    //     description: "ip",
    //     type: FieldTypes.TEXT
    // },
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
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "bases",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "bases",
            },
            {
                button: "bases",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "bases",
            },
            {
                button: "bases",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "bases",
            },
        ]
    },
];

export const BasesQuery: React.FC = () => {
    const { data: base, loadding } = useFetch<Bases[]>("base");

    return (
        <>
            <DataGrid columns={Campos} data={base} loading={loadding} />
        </>
    );
};