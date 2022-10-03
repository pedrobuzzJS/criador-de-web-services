import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Bases } from "../../../@types/base";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        title: "nome",
        description: "nome",
        type: FieldTypes.TEXT
    },
    {
        field: "user",
        title: "user",
        description: "user",
        type: FieldTypes.TEXT
    },
    // {
    //     field: "password",
    //     title: "password",
    //     description: "password",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "db_connection",
    //     title: "db_connection",
    //     description: "db_connection",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "host",
    //     title: "host",
    //     description: "host",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "emp",
    //     title: "emp",
    //     description: "emp",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "fil",
    //     title: "fil",
    //     description: "fil",
    //     type: FieldTypes.TEXT
    // },
    {
        field: "tipobase_id",
        title: "tipobase_id",
        description: "tipobase_id",
        type: FieldTypes.TEXT
    },
    // {
    //     field: "url",
    //     title: "url",
    //     description: "url",
    //     type: FieldTypes.TEXT
    // },
    // {
    //     field: "ip",
    //     title: "ip",
    //     description: "ip",
    //     type: FieldTypes.TEXT
    // },
    {
        field: "permissao",
        title: "permissao",
        description: "permissao",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        title: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "bases",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "bases",
            },
            {
                button: "bases",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "bases",
            },
            {
                button: "bases",
                action: Operation.DELETE,
                title: "Deletar    ",
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