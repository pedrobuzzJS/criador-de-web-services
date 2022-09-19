import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { useFetch } from "../../../hooks/useFetch";
import { Operation } from "../../../Utils/Operations";

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
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "tipowebservice",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
            {
                button: "tipowebservice",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
            {
                button: "tipowebservice",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
        ]
    },
];

export const TipoWebServiceQuery: React.FC = () => {
    const { data: tipoWebServiceData, loadding } = useFetch<any[]>("tipowebservice");

    return (
        <>
            <DataGrid columns={campos} data={tipoWebServiceData} loading={loadding} />
        </>
    );
};