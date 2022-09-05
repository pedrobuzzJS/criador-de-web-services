import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields } from "../../../Utils/Fields";
import { useFetch } from "../../../hooks/useFetch";

const campos: GridFields[] = [
    {
        field: "id",
        tittle: "id",
        description: "id"
    },
    {
        field: "nome",
        tittle: "nome",
        description: "nome"
    },
    {
        field: "sigla",
        tittle: "sigla",
        description: "sigla"
    },
    {
        field: "descricao",
        tittle: "descricao",
        description: "descricao"
    },
    {
        field: "status_id",
        tittle: "status_id",
        description: "status_id"
    },
];

export const TipoWebServiceQuery: React.FC = () => {
    const { data: tipoWebServiceData, loadding } = useFetch<any[]>("tipowebservice");

    return (
        <>
            <DataGrid columns={campos} data={tipoWebServiceData} loading={loadding} />
        </>
    )
};