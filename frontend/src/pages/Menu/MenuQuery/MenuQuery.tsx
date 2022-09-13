import React from "react";
import { LinkMenu } from "../../../@types/menu";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

const campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "id",
        key: true,
        type: FieldTypes.TEXT,
    },
    {
        field: "nome",
        tittle: "Nome",
        description: "nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "parametros",
        tittle: "Parametros",
        description: "parametros",
        type: FieldTypes.TEXT,
    },
    {
        field: "possuifilhos",
        tittle: "Possui Filhos",
        description: "possuifilhos",
        type: FieldTypes.TEXT,
    },
    {
        field: "component",
        tittle: "Componente",
        description: "component",
        type: FieldTypes.TEXT,
    },
    {
        field: "rota",
        tittle: "Rota",
        description: "rota",
        type: FieldTypes.TEXT,
    },
    {
        field: "icone",
        tittle: "Icone",
        description: "icone",
        type: FieldTypes.TEXT,
    },
    {
        field: "pai_id",
        tittle: "Pai ID",
        description: "pai_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "ordem",
        tittle: "Ordem",
        description: "ordem",
        type: FieldTypes.TEXT,
    },
    {
        field: "desabilitado",
        tittle: "Desabilitado",
        description: "desabilitado",
        type: FieldTypes.TEXT,
    },
    {
        field: "papel",
        tittle: "Papel",
        description: "papel",
        type: FieldTypes.TEXT,
    },
    {
        field: "permissao",
        tittle: "Permissao",
        description: "permissao",
        type: FieldTypes.TEXT,
    },
    {
        field: "status_id",
        tittle: "Status ID",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "buttons",
        tittle: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "teste",
                action: Operation.ALTER,
                tittle: "teste",
            }
        ]
    }
];

export const MenuQuery: React.FC = () => {
    const { data: Menus, loadding } = useFetch<LinkMenu[]>("menu");

    return (
        <>
            <DataGrid columns={campos} data={Menus} loading={loadding} />
        </>
    );
};