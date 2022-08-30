import React from "react";
import { LinkMenu } from "../../../@types/menu";
import { DataGrid } from "../../../components/DataGrid/Grid";
import { useFetch } from "../../../hooks/useFetch";
import { GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

const campos: GridFields[] = [
    {
        field: "id",
        tittle: "ID",
        description: "id",
        key: true
    },
    {
        field: "nome",
        tittle: "Nome",
        description: "nome",
    },
    {
        field: "parametros",
        tittle: "Parametros",
        description: "parametros",
    },
    {
        field: "possuifilhos",
        tittle: "Possui Filhos",
        description: "possuifilhos",
    },
    {
        field: "component",
        tittle: "Componente",
        description: "component",
    },
    {
        field: "rota",
        tittle: "Rota",
        description: "rota",
    },
    {
        field: "icone",
        tittle: "Icone",
        description: "icone",
    },
    {
        field: "pai_id",
        tittle: "Pai ID",
        description: "pai_id",
    },
    {
        field: "ordem",
        tittle: "Ordem",
        description: "ordem",
    },
    {
        field: "desabilitado",
        tittle: "Desabilitado",
        description: "desabilitado",
    },
    {
        field: "papel",
        tittle: "Papel",
        description: "papel",
    },
    {
        field: "permissao",
        tittle: "Permissao",
        description: "permissao",
    },
    {
        field: "status_id",
        tittle: "Status ID",
        description: "status_id",
    },
    {
        field: "buttons",
        tittle: "Acoes",
        description: "Acoes",
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