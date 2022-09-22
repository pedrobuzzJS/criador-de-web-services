import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Cores } from "../../../@types/cores";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "descricao",
        tittle: "descricao",
        description: "descricao",
        type: FieldTypes.TEXT
    },
    {
        field: "cor",
        tittle: "cor",
        description: "cor",
        type: FieldTypes.TEXT
    },
    {
        field: "created_at",
        tittle: "created_at",
        description: "created_at",
        type: FieldTypes.TEXT
    },
    {
        field: "updated_at",
        tittle: "updated_at",
        description: "updated_at",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "cores",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "cores",
            },
            {
                button: "cores",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "cores",
            },
            {
                button: "cores",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "cores",
            },
        ]
    },
];


export const CoresQuery: React.FC = () => {
    const { data, loadding } = useFetch<Cores[]>("cores");

    return (
        <>
            <DataGrid columns={Campos} data={data} loading={loadding} />
        </>
    );
};