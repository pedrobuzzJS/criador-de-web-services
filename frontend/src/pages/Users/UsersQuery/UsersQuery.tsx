import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { FieldTypes, GridFields  } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Users } from "../../../@types/user";

const Campos: GridFields[] = [
    {
        field: "id",
        title: "id",
        description: "id",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "name",
    //     title: "name",
    //     description: "name",
    //     type: FieldTypes.TEXT,
    // },
    {
        field: "username",
        title: "username",
        description: "username",
        type: FieldTypes.TEXT,
    },
    {
        field: "email",
        title: "email",
        description: "email",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "email_verified",
    //     title: "email_verified",
    //     description: "email_verified"
    // },
    // {
    //     field: "password",
    //     title: "password",
    //     description: "password"
    // },
    // {
    //     field: "remember_token",
    //     title: "remember_token",
    //     description: "remember_token"
    // },
    {
        field: "status_id",
        title: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "created_at",
        title: "created_at",
        description: "created_at",
        type: FieldTypes.TEXT,
    },
    {
        field: "updated_at",
        title: "updated_at",
        description: "updated_at",
        type: FieldTypes.TEXT,
    },
    {
        field: "acoes",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "usuario",
                action: Operation.VIEW,
                title: "Visualizar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "usuario",
            },
            {
                button: "usuario",
                action: Operation.ALTER,
                title: "Alterar",
                icon: "RiIcons.RiDashboardFill",
                rotina: "usuario",
            },
            {
                button: "usuario",
                action: Operation.DELETE,
                title: "Deletar    ",
                icon: "RiIcons.RiDashboardFill",
                rotina: "usuario",
            },
        ]
    },
];

export const UserQuery: React.FC = () => {
    const { data: usersFetch, loadding } = useFetch<Users[]>("usuario");

    return (
        <DataGrid columns={Campos} data={usersFetch} loading={loadding} />
    );
};