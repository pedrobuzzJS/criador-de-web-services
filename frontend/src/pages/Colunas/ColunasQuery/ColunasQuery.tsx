import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { GridFields, FieldTypes } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Coluna } from "../../../@types/coluna";

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
    // {
    //     field: "tabela_id",
    //     tittle: "tabela_id",
    //     description: "tabela_id",
    //     type: FieldTypes.TEXT
    // },
    {
        field: "permissao",
        tittle: "PK",
        description: "PK",
        type: FieldTypes.TEXT
    },
    {
        field: "status_id",
        tittle: "Status",
        description: "Status",
        type: FieldTypes.TEXT
    },
    {
        field: "tipo",
        tittle: "tipo",
        description: "tipo",
        type: FieldTypes.TEXT
    },
    {
        field: "posicao",
        tittle: "posicao",
        description: "posicao",
        type: FieldTypes.TEXT
    },
    {
        field: "nulo",
        tittle: "nulo",
        description: "nulo",
        type: FieldTypes.TEXT
    },
    {
        field: "char_max",
        tittle: "char_max",
        description: "char_max",
        type: FieldTypes.TEXT
    },
    {
        field: "is_identity",
        tittle: "is_identity",
        description: "is_identity",
        type: FieldTypes.TEXT
    },
    {
        field: "is_self_referencing",
        tittle: "is_self_referencing",
        description: "is_self_referencing",
        type: FieldTypes.TEXT
    },
    {
        field: "is_updatable",
        tittle: "is_updatable",
        description: "is_updatable",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "colunas",
                action: Operation.VIEW,
                tittle: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "colunas",
            },
            {
                button: "colunas",
                action: Operation.ALTER,
                tittle: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "colunas",
            },
            {
                button: "colunas",
                action: Operation.DELETE,
                tittle: "Deletar    ",
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