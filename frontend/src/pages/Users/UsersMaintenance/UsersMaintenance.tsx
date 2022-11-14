import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";

export const UsersMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("usuario", {
        params: {
            id: id
        },
    });
    const inputs: FormInputs[] = [
        {
            id: "id",
            name: "id",
            placeholder: "Código",
            label: "Código", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: true,
        },
        {
            id: "name",
            name: "name",
            placeholder: "Nome",
            label: "Nome", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "username",
            name: "username",
            placeholder: "Username",
            label: "Username", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "email",
            name: "email",
            placeholder: "E-mail",
            label: "E-mail", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "email_verified",
            name: "email_verified",
            placeholder: "E-mail Verificado",
            label: "E-mail Verificado", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "password",
            name: "password",
            placeholder: "password",
            label: "password", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "remember_token",
            name: "remember_token",
            placeholder: "remember_token",
            label: "remember_token", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "status_id",
            name: "status_id",
            placeholder: "Status",
            label: "Status", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "created_at",
            name: "created_at",
            placeholder: "created_at",
            label: "created_at", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "updated_at",
            name: "updated_at",
            placeholder: "updated_at",
            label: "updated_at", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        }
    ];

    return (
        <FormBuilder
            op={Number(op)}
            data={data}
            campos={inputs}
            callBack={() => console.log()}
        />
    );
};