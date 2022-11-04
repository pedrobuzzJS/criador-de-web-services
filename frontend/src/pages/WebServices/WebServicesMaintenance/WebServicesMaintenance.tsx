import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { WebServicesObjQuery } from "../../WebServicesObj/WebServicesObjQuery/WebServicesObjQuery";
import { useWebServiceHook } from "../../../context/webServiceMountContext";

export const WebServicesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const [ fieldInputs, setFieldInputs ] = useState<FormInputs[]>(
        [
            {
                id: "id",
                name: "id",
                placeholder: "Código",
                label: "Código", 
                pixels: "250",
                type: InputType.TEXT,
                isChave: true,
                disabled: true,
            },
            {
                id: "nome",
                name: "nome",
                placeholder: "nome",
                label: "nome", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "descricao",
                name: "descricao",
                placeholder: "descricao",
                label: "descricao", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "prover",
                name: "prover",
                placeholder: "prover",
                label: "prover", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "consumir",
                name: "consumir",
                placeholder: "consumir",
                label: "consumir", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "varsao",
                name: "varsao",
                placeholder: "varsao",
                label: "varsao", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "status_id",
                name: "status_id",
                placeholder: "status_id",
                label: "status_id", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
        ]
    );
    const { data } = useFetch<any>("webservices", {
        params: {
            id: id
        },
    });
    const webservice_id = data?.[0].id;

    const { setWebServiceId } = useWebServiceHook();
    if (id) setWebServiceId(Number(id));

    const envia = () => {
    };

    return (
        <>
            <FormBuilder op={Number(op)} data={data} campos={fieldInputs} callBack={envia} urlBakc="webservices"/>
            {webservice_id && <WebServicesObjQuery webservice_id={webservice_id} />}
        </>
    );
};