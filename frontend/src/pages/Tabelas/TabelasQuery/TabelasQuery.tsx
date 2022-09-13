import React from "react";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Table } from "../../../@types/table";

const campos: GridFields[] = [
    {
        field: "table_catalog",
        tittle: "Base de Dados",
        description: "Base de Dados",
        type: FieldTypes.TEXT,
    },
    {
        field: "table_schema",
        tittle: "Schema da Tabela",
        description: "Schema da Tabela",
        type: FieldTypes.TEXT,
    },
    {
        field: "table_name",
        tittle: "Nome da Tabela",
        description: "Nome da Tabela",
        type: FieldTypes.TEXT,
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