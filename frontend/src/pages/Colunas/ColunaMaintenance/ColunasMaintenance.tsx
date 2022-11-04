import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";

export const ColunasMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const [ inputs ] = useState<FormInputs[]>(
        [
            {
                id: "id",
                name: "id",
                placeholder: "Código",
                label: "Código", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "nome",
                name: "nome",
                placeholder: "Nome",
                label: "Nome", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "pk",
                name: "pk",
                placeholder: "PK",
                label: "PK", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "fk",
                name: "fk",
                placeholder: "FK",
                label: "FK", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "tabela_id",
                name: "tabela_id",
                placeholder: "tabela_id",
                label: "tabela_id", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "permissao",
                name: "permissao",
                placeholder: "permissao",
                label: "permissao", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "status_id",
                name: "status_id",
                placeholder: "status_id",
                label: "status_id", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "tipo",
                name: "tipo",
                placeholder: "tipo",
                label: "tipo", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "posicao",
                name: "posicao",
                placeholder: "posicao",
                label: "posicao", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "nulo",
                name: "nulo",
                placeholder: "nulo",
                label: "nulo", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "status_id",
                name: "status_id",
                placeholder: "status_id",
                label: "status_id", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "char_max",
                name: "char_max",
                placeholder: "char_max",
                label: "char_max", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "is_identity",
                name: "is_identity",
                placeholder: "is_identity",
                label: "is_identity", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "is_self_referencing",
                name: "is_self_referencing",
                placeholder: "is_self_referencing",
                label: "is_self_referencing", 
                pixels: "250",
                type: InputType.TEXT,
            },
            {
                id: "is_updatable",
                name: "is_updatable",
                placeholder: "is_updatable",
                label: "is_updatable", 
                pixels: "250",
                type: InputType.TEXT,
            },
        ]
    );
    const { data, loadding } = useFetch<any>("colunas", {
        params: {
            id: id
        },
    });

    const f = () => {};

    return (
        <FormBuilder op={Number(op)} data={data} campos={inputs} callBack={f}/>
    );
};