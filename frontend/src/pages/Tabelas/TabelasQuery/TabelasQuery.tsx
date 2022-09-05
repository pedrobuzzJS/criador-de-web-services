import React from "react";
import { GridFields } from "../../../Utils/Fields";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Table } from "../../../@types/table";

const campos: GridFields[] = [
    {
        field: "table_catalog",
        tittle: "Base de Dados",
        description: "Base de Dados"
    },
    {
        field: "table_schema",
        tittle: "Schema da Tabela",
        description: "Schema da Tabela"
    },
    {
        field: "table_name",
        tittle: "Nome da Tabela",
        description: "Nome da Tabela"
    },
];

export const TabelasQuery: React.FC = () => {
    const { data: tables, loadding } = useFetch<Table[]>("table");

    return (
        <>
            <DataGrid columns={campos} data={tables} loading={loadding} />
        </>
    );
};