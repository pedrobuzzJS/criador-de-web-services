import React from "react";
import { WebServices } from "../../../@types/webServices";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import UseButtonStore from "../../../stores/buttonStore";
import { Operation } from "../../../Utils/Operations";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        title: "nome",
        description: "nome",
        type: FieldTypes.TEXT
    },
    {
        field: "descricao",
        title: "descricao",
        description: "descricao",
        type: FieldTypes.TEXT
    },
    {
        field: "prover",
        title: "prover",
        description: "prover",
        type: FieldTypes.TEXT
    },
    {
        field: "consumir",
        title: "consumir",
        description: "consumir",
        type: FieldTypes.TEXT
    },
    {
        field: "varsao",
        title: "varsao",
        description: "varsao",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        title: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "webservices",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
            {
                button: "webservices",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
            {
                button: "webservices",
                action: Operation.DELETE,
                title: "Deletar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
            {
                button: "webservices",
                action: Operation.SEARCH,
                title: "Ativar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
        ]
    },
];

export const WebServicesQuery: React.FC = () => {
    const { data, loadding } = useFetch<WebServices[]>("webservices");
    const button = UseButtonStore(state => state?.button[0]);

    console.log(button);

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} />
    );
};