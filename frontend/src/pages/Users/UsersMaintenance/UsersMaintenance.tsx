import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";

const inputs: FormInputs[] = [
    {
        id: "id",
        name: "id",
        placeholder: "Código",
        label: "Código", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "name",
        name: "name",
        placeholder: "Nome",
        label: "Nome", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "username",
        name: "username",
        placeholder: "Username",
        label: "Username", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "email",
        name: "email",
        placeholder: "E-mail",
        label: "E-mail", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "email_verified",
        name: "email_verified",
        placeholder: "E-mail Verificado",
        label: "E-mail Verificado", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "password",
        name: "password",
        placeholder: "password",
        label: "password", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "remember_token",
        name: "remember_token",
        placeholder: "remember_token",
        label: "remember_token", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "status_id",
        name: "status_id",
        placeholder: "Status",
        label: "Status", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "created_at",
        name: "created_at",
        placeholder: "created_at",
        label: "created_at", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "updated_at",
        name: "updated_at",
        placeholder: "updated_at",
        label: "updated_at", 
        pixels: "250",
        type: InputType.TEXT,
    }
];

export const UsersMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("usuario", {
        params: {
            id: id
        },
    });

    return (
        <FormBuilder operation={Number(op)} data={data} campos={inputs} fun={() => console.log("nada")} />
    );
};