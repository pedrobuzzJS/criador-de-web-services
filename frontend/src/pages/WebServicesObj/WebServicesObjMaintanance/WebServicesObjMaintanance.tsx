import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/Form/Button/Button";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { Modal } from "../../../components/Modal/Modal";
import { WebServiceMount } from "../../../components/WebServiceMount/WebServiceMount";
import { useFetch } from "../../../hooks/useFetch";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Container, WebServiceBuilderContainer } from "./styles";
import { useWebServiceHook } from "../../../context/webServiceMountContext";

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
    const [ mo, setMo ] = useState(false);
    const { data } = useFetch<any>("webservicesobj", {
        params: {
            id: id
        },
    });

    const { webservice_id } = useWebServiceHook();

    return (
        <>
            {/* {data && <FormBuilder op={Number(op)} data={data} campos={inputs} callBack={envia}/>} */}
            <Container>
                <WebServiceMount webservice_id={webservice_id} />

                <WebServiceBuilderContainer>
                    
                </WebServiceBuilderContainer>
        
            </Container>
        </>
    );
};