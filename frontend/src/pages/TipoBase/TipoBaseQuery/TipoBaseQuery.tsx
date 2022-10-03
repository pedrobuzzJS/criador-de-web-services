import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { TipoBases } from "../../../@types/tipo-base";

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
        field: "icone",
        title: "icone",
        description: "icone",
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
                button: "tipo-base",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipo-base",
            },
            {
                button: "tipo-base",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipo-base",
            },
            {
                button: "tipo-base",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipo-base",
            },
        ]
    },
];

export const TipoBaseQuery: React.FC = () => {
    const { data, loadding } = useFetch<TipoBases[]>("tipo-base");
    return (
        <>
            <DataGrid columns={Campos} data={data} loading={loadding} />
        </>
    );
};