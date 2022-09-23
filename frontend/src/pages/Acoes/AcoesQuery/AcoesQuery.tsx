import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Acoes } from "../../../@types/acoes";

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
        field: "metodo",
        tittle: "metodo",
        description: "metodo",
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
                button: "acoes",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "acoes",
            },
            {
                button: "acoes",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "acoes",
            },
            {
                button: "acoes",
                action: Operation.DELETE,
                tittle: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "acoes",
            },
        ]
    },
];

export const AcoesQuery: React.FC = () => {
    const { data, loadding } = useFetch<Acoes[]>("acoes");

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} />
    );
};