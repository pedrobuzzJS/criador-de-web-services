import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Status } from "../../../@types/status";
// import * as AiIcons from 'react-icons/ai';
// import * as RiIcons from 'react-icons/ri'

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
        description: "Acoes",
        buttons: [
            {
                button: "view-status",
                action: Operation.VIEW,
                tittle: "View",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "alter-status",
                action: Operation.ALTER,
                tittle: "Alter",
                icon: "RiIcons.RiDashboardFill"
            },
            {
                button: "delete-status",
                action: Operation.DELETE,
                tittle: "Delete",
                icon: "RiIcons.RiDashboardFill"
            },
        ]
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