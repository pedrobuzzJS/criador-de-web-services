import React from "react";
import { DataGrid } from "../../../components/DataGrid/Grid";
import { GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Status } from "../../../@types/status";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID"
    },
    {
        field: "nome",
        tittle: "Nome",
        description: "Nome"
    },
    {
        field: "descricao",
        tittle: "Descricao",
        description: "Descricao"
    },
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes"
    },
];

export const StatusQuery: React.FC = () => {
    const { data: status, loadding } = useFetch<Status[]>("status");

    return (
        <>
            <DataGrid columns={Campos} data={status} loading={loadding} />
        </>
    );
}