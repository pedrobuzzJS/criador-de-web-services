import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { ColunasQuery } from "../../Colunas/ColunasQuery/ColunasQuery";

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
        id: "nome",
        name: "nome",
        placeholder: "Nome",
        label: "Nome", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "scheme",
        name: "scheme",
        placeholder: "Scheme",
        label: "Scheme", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "base_id",
        name: "base_id",
        placeholder: "Base",
        label: "Base", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "permissao",
        name: "permissao",
        placeholder: "Permissao",
        label: "Permissao", 
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
];

export const TabelasMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any[0]>("table", {
        params: {
            id: id
        },
    });
    const tabela_id = data?.[0].id;

    return (
        <>
            <FormBuilder op={Number(op)} data={data} campos={inputs} fun={() => console.log("nada")} />
            {tabela_id && <ColunasQuery tabela_id={tabela_id} />}
        </>
    );
};