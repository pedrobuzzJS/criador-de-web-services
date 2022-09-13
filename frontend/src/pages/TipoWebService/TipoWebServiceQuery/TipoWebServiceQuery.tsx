import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { useFetch } from "../../../hooks/useFetch";

const campos: GridFields[] = [
    {
        field: "id",
        tittle: "id",
        description: "id",
        type: FieldTypes.TEXT,
    },
    {
        field: "nome",
        tittle: "nome",
        description: "nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "sigla",
        tittle: "sigla",
        description: "sigla",
        type: FieldTypes.TEXT,
    },
    {
        field: "descricao",
        tittle: "descricao",
        description: "descricao",
        type: FieldTypes.TEXT,
    },
    {
        field: "status_id",
        tittle: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT,
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