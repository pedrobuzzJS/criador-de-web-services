import React, { useCallback } from "react";
import { useFetch } from "../../../hooks/useFetch";
import UseStatusStore from "../../../stores/StatusStore";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Button } from "../../../components/Form/Button/Button";
import api from "../../../services/api";

const inputs: FormInputs[] = [
    {
        id: "id",
        name: "id",
        placeholder: "Código",
        label: "Código", 
        pixels: "250",
        type: InputType.NUMBER,
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
        id: "icone",
        name: "icone",
        placeholder: "icone",
        label: "icone", 
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
];

export const TipoBaseMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<any>("tipo-base", {
        params: {
            id: id
        },
    });
    const envia = () => {
    };

    return (
        <FormBuilder op={Number(op)} data={data} campos={inputs} callBack={envia}/>
    );
};