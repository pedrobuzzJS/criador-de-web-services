import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WebServices } from "../../../@types/webServices";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { useFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { useForm } from "../../../context/formContext";

export const WebServiceRoutesMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data: webservices } = useFetch<WebServices[]>("webservices");
    const webSericesList = webservices?.map(item => { return { key: (item.id), value: item.nome } });
    const { data, loadding } = useFetch<any>("webserviceroutes", {
        params: {
            id: id
        },
    });
    const [ webServiceObj, setWebServiceObj ] = useState<any[]>();
    const { getEvent } = useForm();

    const webServiceHtmlEvent = getEvent();
    
    useEffect( () => {
        if (webServiceHtmlEvent?.target?.value) {
            api.get("webservicesobj", {
                params: {
                    webservice_id: webServiceHtmlEvent?.target?.value
                },
            }).then(
                response => {
                    let responseData: any[] = response.data;
                    setWebServiceObj(responseData?.map(item => { return { key: (item.id), value: item.id } }));
                }
            )
        }
    }, [webServiceHtmlEvent?.target?.name, webServiceHtmlEvent?.target?.value] );

    const inputs: FormInputs[] = [
        {
            id: "id",
            name: "id",
            placeholder: "Código",
            label: "Código", 
            pixels: "250",
            type: InputType.NUMBER,
            isChave: true,
            disabled: true,
        },
        {
            id: "webservice_id",
            name: "webservice_id",
            placeholder: "webservice_id",
            label: "webservice_id", 
            pixels: "250",
            type: InputType.SELECT,
            list: webSericesList ?? webSericesList,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "werbservoceobj_id",
            name: "werbservoceobj_id",
            placeholder: "werbservoceobj_id",
            label: "werbservoceobj_id", 
            pixels: "250",
            type: InputType.SELECT,
            list: webServiceObj,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
        {
            id: "route",
            name: "route",
            placeholder: "route",
            label: "route", 
            pixels: "250",
            type: InputType.TEXT,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
        },
    ]

    return (
        <FormBuilder
            op={Number(op)}
            data={data}
            campos={inputs}
            callBack={() => console.log("")}
            urlBakc="webserviceroutes"
        />
    );
};