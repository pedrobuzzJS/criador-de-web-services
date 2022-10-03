import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Rotas } from "../../../@types/rotas";

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
        field: "rota",
        title: "rota",
        description: "rota",
        type: FieldTypes.TEXT
    },
    {
        field: "parametros",
        title: "parametros",
        description: "parametros",
        type: FieldTypes.TEXT
    },
    {
        field: "metodo",
        title: "metodo",
        description: "metodo",
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
                button: "rotas",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "rotas",
            },
            {
                button: "rotas",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "rotas",
            },
            {
                button: "rotas",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "rotas",
            },
        ]
    },
];


export const RotasQuery: React.FC = () => {
    const { data, loadding } = useFetch<Rotas[]>("rotas");

    return (
        <>
            <DataGrid columns={Campos} data={data} loading={loadding} />
        </>
    );
};