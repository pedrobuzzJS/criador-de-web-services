import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Tabelas } from "../../../@types/tabelas";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        title: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT
    },
    {
        field: "scheme",
        title: "scheme",
        description: "scheme",
        type: FieldTypes.TEXT
    },
    {
        field: "base_id",
        title: "base_id",
        description: "base_id",
        type: FieldTypes.TEXT
    },
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
        field: "scheme",
        title: "scheme",
        description: "scheme",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "view-status",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "alter-status",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "delete-status",
                action: Operation.DELETE,
                title: "Deletar    ",
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