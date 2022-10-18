import React, { useState } from "react";
import { WebServiceObj } from "../../../@types/webServicesObj";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "ID",
        type: FieldTypes.TEXT
    },
    {
        field: "obj",
        title: "obj",
        description: "obj",
        type: FieldTypes.TEXT
    },
    {
        field: "sql",
        title: "sql",
        description: "sql",
        type: FieldTypes.TEXT
    },
    {
        field: "versao",
        title: "versao",
        description: "versao",
        type: FieldTypes.TEXT
    },
    {
        field: "webservice_id",
        title: "webservice_id",
        description: "webservice_id",
        type: FieldTypes.TEXT
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "webservicesobj",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservicesobj",
            },
            {
                button: "webservicesobj",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservicesobj",
            },
            {
                button: "webservicesobj",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservicesobj",
            },
            {
                button: "webservices",
                action: Operation.ATIVAR,
                title: "Ativar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "webservices",
            },
        ]
    },
];

export const WebServicesObjQuery: React.FC = () => {
    const { data, loadding } = useFetch<WebServiceObj[]>("webservicesobj");

    return (
        <DataGrid columns={Campos} data={data} loading={loadding} pathMantencao="webservicesobj" />
    );
};