import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Coluna } from "../../../@types/coluna";

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
    // {
    //     field: "tabela_id",
    //     title: "tabela_id",
    //     description: "tabela_id",
    //     type: FieldTypes.TEXT
    // },
    {
        field: "permissao",
        title: "PK",
        description: "PK",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        title: "Status",
        description: "Status",
        type: FieldTypes.TEXT
    },
    {
        field: "tipo",
        title: "tipo",
        description: "tipo",
        type: FieldTypes.TEXT
    },
    {
        field: "posicao",
        title: "posicao",
        description: "posicao",
        type: FieldTypes.TEXT
    },
    {
        field: "nulo",
        title: "nulo",
        description: "nulo",
        type: FieldTypes.TEXT
    },
    {
        field: "char_max",
        title: "char_max",
        description: "char_max",
        type: FieldTypes.TEXT
    },
    {
        field: "is_identity",
        title: "is_identity",
        description: "is_identity",
        type: FieldTypes.TEXT
    },
    {
        field: "is_self_referencing",
        title: "is_self_referencing",
        description: "is_self_referencing",
        type: FieldTypes.TEXT
    },
    {
        field: "is_updatable",
        title: "is_updatable",
        description: "is_updatable",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "colunas",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "colunas",
            },
            {
                button: "colunas",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "colunas",
            },
            {
                button: "colunas",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "colunas",
            },
        ]
    },
];

export const ColunasQuery: React.FC<Coluna> = ({tabela_id, ...props}) => {
    const { data, loadding } = useFetch<any[]>("colunas", {
        params: {
            id: tabela_id
        }
    });

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} />
    );
};