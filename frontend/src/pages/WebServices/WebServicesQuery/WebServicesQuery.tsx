import React from "react";
import { WebServices } from "../../../@types/webServices";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        tittle: "nome",
        description: "nome",
        type: FieldTypes.TEXT
    },
    {
        field: "descricao",
        tittle: "descricao",
        description: "descricao",
        type: FieldTypes.TEXT
    },
    {
        field: "prover",
        tittle: "prover",
        description: "prover",
        type: FieldTypes.TEXT
    },
    {
        field: "consumir",
        tittle: "consumir",
        description: "consumir",
        type: FieldTypes.TEXT
    },
    {
        field: "varsao",
        tittle: "varsao",
        description: "varsao",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        tittle: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "webservices",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
            {
                button: "webservices",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
            {
                button: "webservices",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
        ]
    },
];

export const WebServicesQuery: React.FC = () => {
    const { data, loadding } = useFetch<WebServices[]>("webservices");

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} />
    );
};