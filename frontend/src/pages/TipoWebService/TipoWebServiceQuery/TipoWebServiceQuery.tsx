import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { useFetch } from "../../../hooks/useFetch";
import { Operation } from "../../../Utils/Operations";

const campos: GridFields[] = [
    {
        field: "id",
        title: "id",
        description: "id",
        type: FieldTypes.TEXT,
    },
    {
        field: "nome",
        title: "nome",
        description: "nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "sigla",
        title: "sigla",
        description: "sigla",
        type: FieldTypes.TEXT,
    },
    {
        field: "descricao",
        title: "descricao",
        description: "descricao",
        type: FieldTypes.TEXT,
    },
    {
        field: "status_id",
        title: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "tipowebservice",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
            {
                button: "tipowebservice",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
            {
                button: "tipowebservice",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "tipowebservice",
            },
        ]
    },
];

export const TipoWebServiceQuery: React.FC = () => {
    const { data: tipoWebServiceData, loadding } = useFetch<any[]>("tipowebservice");

    return (
        <>
            <DataGrid columns={campos} data={tipoWebServiceData} loading={loadding} />
        </>
    );
};