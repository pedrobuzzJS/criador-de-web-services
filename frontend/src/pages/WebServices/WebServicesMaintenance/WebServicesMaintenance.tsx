import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { WebServicesObjQuery } from "../../WebServicesObj/WebServicesObjQuery/WebServicesObjQuery";
import { useWebServiceHook } from "../../../context/webServiceMountContext";
import { Status } from "../../../@types/status";

export const WebServicesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data: status } = useFetch<Status[]>("status");
    const statusOptions = status?.map(item => { return { key: (item.id), value: item.nome } });
    const fieldInputs: FormInputs[] = [
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
            id: "varsao",
            name: "varsao",
            placeholder: "varsao",
            label: "varsao", 
            pixels: "250",
            type: InputType.NUMBER,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "status_id",
            name: "status_id",
            placeholder: "status_id",
            label: "status_id", 
            pixels: "250",
            type: InputType.SELECT,
            list: statusOptions ?? statusOptions,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,
        },
    ];

    const { data } = useFetch<any>("webservices", {
        params: {
            id: id
        },
    });

    const { setWebServiceId } = useWebServiceHook();
    if (id) setWebServiceId(Number(id));

    const envia = () => {
    };

    return (
        <>
            {data && 
                <FormBuilder
                    op={Number(op)}
                    data={data}
                    campos={fieldInputs}
                    callBack={envia}
                    urlBakc="webservices"
                />
            }
            {id && 
                <WebServicesObjQuery
                    webservice_id={Number(id)}
                />
            }
        </>
    );
};