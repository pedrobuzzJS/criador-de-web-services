import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Rotas } from "../../../@types/rotas";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "nome",
        tittle: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT
    },
    {
        field: "rota",
        tittle: "rota",
        description: "rota",
        type: FieldTypes.TEXT
    },
    {
        field: "parametros",
        tittle: "parametros",
        description: "parametros",
        type: FieldTypes.TEXT
    },
    {
        field: "metodo",
        tittle: "metodo",
        description: "metodo",
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
                button: "rotas",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "rotas",
            },
            {
                button: "rotas",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "rotas",
            },
            {
                button: "rotas",
                action: Operation.DELETE,
                tittle: "Deletar    ",
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