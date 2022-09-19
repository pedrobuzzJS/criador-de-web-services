import React from "react";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Table } from "../../../@types/table";

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

export const TabelasQuery: React.FC = () => {
    const { data, loadding } = useFetch<Table[]>("table");

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} />
    );
};