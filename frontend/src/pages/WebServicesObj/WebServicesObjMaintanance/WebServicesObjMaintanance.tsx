import React from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
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
        id: "obj",
        name: "obj",
        placeholder: "obj",
        label: "obj", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "sql",
        name: "sql",
        placeholder: "sql",
        label: "sql", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "versao",
        name: "versao",
        placeholder: "versao",
        label: "versao", 
        pixels: "250",
        type: InputType.TEXT,
    },
    {
        id: "webservice_id",
        name: "webservice_id",
        placeholder: "webservice_id",
        label: "webservice_id", 
        pixels: "250",
        type: InputType.TEXT,
    }
];

export const WebServicesObjMaintanance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("webservicesobj", {
        params: {
            id: id
        },
    });

    const envia = () => {
    };

    return (
        <>
            {data && <FormBuilder op={Number(op)} data={data} campos={inputs} fun={envia}/>}
            <h1>opa</h1>
        </>
    );
};