import React from "react";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { FieldTypes, GridFields  } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";
import { useFetch } from "../../../hooks/useFetch";
import { Users } from "../../../@types/user";
import { Status } from "../../../@types/status";

const Campos: GridFields[] = [
    {
        field: "id",
        tittle: "id",
        description: "id",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "name",
    //     tittle: "name",
    //     description: "name",
    //     type: FieldTypes.TEXT,
    // },
    {
        field: "username",
        tittle: "username",
        description: "username",
        type: FieldTypes.TEXT,
    },
    {
        field: "email",
        tittle: "email",
        description: "email",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "email_verified",
    //     tittle: "email_verified",
    //     description: "email_verified"
    // },
    // {
    //     field: "password",
    //     tittle: "password",
    //     description: "password"
    // },
    // {
    //     field: "remember_token",
    //     tittle: "remember_token",
    //     description: "remember_token"
    // },
    {
        field: "status_id",
        tittle: "status_id",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    // {
    //     field: "created_at",
    //     tittle: "created_at",
    //     description: "created_at"
    // },
    // {
    //     field: "updated_at",
    //     tittle: "updated_at",
    //     description: "updated_at"
    // },
];

export const UserQuery: React.FC = () => {
    const { data: usersFetch, loadding } = useFetch<Users[]>("usuario");
    const { data: statusFetch } = useFetch<Status[]>("status");

    return (
        <DataGrid columns={Campos} data={usersFetch} loading={loadding} />
    )
}