import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Status } from "../../../@types/status";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        title: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT
    },
    {
        field: "descricao",
        title: "Descricao",
        description: "Descricao",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "status",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "status",
            },
            {
                button: "status",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "status",
            },
            {
                button: "status",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "status",
            },
        ]
    },
];

export const StatusQuery: React.FC = () => {
    const { data: status, loadding } = useFetch<Status[]>("status");

    return (
        <DataGrid columns={Campos} data={status} loading={loadding} />
    );
};