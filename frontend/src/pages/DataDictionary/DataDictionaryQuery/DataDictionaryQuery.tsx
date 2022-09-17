import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Tabelas } from "../../../@types/tabelas";

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
                button: "view-status",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "alter-status",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "delete-status",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill"
            },
        ]
    },
];

export const DataDictionaryQuery: React.FC = () => {
    const { data, loadding } = useFetch<Tabelas[]>("table");

    return (
        <DataGrid columns={[]} data={data} />
    );
};