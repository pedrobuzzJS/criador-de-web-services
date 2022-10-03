import React from "react";
import { LinkMenu } from "../../../@types/menu";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

const campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "id",
        key: true,
        type: FieldTypes.TEXT,
    },
    {
        field: "nome",
        title: "Nome",
        description: "nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "parametros",
        title: "Parametros",
        description: "parametros",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "possuifilhos",
    //     title: "Possui Filhos",
    //     description: "possuifilhos",
    //     type: FieldTypes.TEXT,
    // },
    // {
    //     field: "component",
    //     title: "Componente",
    //     description: "component",
    //     type: FieldTypes.TEXT,
    // },
    {
        field: "rota",
        title: "Rota",
        description: "rota",
        type: FieldTypes.TEXT,
    },
    {
        field: "icone",
        title: "Icone",
        description: "icone",
        type: FieldTypes.TEXT,
    },
    {
        field: "pai_id",
        title: "Pai ID",
        description: "pai_id",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "ordem",
    //     title: "Ordem",
    //     description: "ordem",
    //     type: FieldTypes.TEXT,
    // },
    // {
    //     field: "desabilitado",
    //     title: "Desabilitado",
    //     description: "desabilitado",
    //     type: FieldTypes.TEXT,
    // },
    // {
    //     field: "papel",
    //     title: "Papel",
    //     description: "papel",
    //     type: FieldTypes.TEXT,
    // },
    // {
    //     field: "permissao",
    //     title: "Permissao",
    //     description: "permissao",
    //     type: FieldTypes.TEXT,
    // },
    {
        field: "status_id",
        title: "Status ID",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "buttons",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "menu",
                action: Operation.SEARCH,
                title: "Visualisar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "menu",
            },
            {
                button: "menu",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "menu",
            }
        ]
    }
];

export const MenuQuery: React.FC = () => {
    const { data: Menus, loadding } = useFetch<LinkMenu[]>("menu");

    return (
        <DataGrid columns={campos} data={Menus} loading={loadding} />
    );
};