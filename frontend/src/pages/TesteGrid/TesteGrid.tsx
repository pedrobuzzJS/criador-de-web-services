import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { DataGrid } from "../../components/DataGrid/Grid";
import { GridFields } from "../../Utils/Fields";
import { LinkMenu } from "../../@types/menu";

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
];

export const TesteGrid: React.FC = () => {
    const { data } = useFetch<LinkMenu[]>("menu");

    return (
        <>
            <DataGrid columns={campos} data={data} />
        </>
    );
};