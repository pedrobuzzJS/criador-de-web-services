import React, { useCallback, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import UseStatusStore from "../../../stores/StatusStore";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Button } from "../../../components/Form/Button/Button";
import api from "../../../services/api";
import { Operation } from "../../../Utils/Operations";

export const StatusMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<any>("status", {
        params: {
            id: id
        },
    });
    const [ inputs, setInputs ] = useState<FormInputs[]>(
        [
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
                id: "nome",
                name: "nome",
                placeholder: "Nome",
                label: "Nome", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "descricao",
                name: "descricao",
                placeholder: "Descricao",
                label: "Descricao", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
        ]
    );

    const status = UseStatusStore(state => state.status);
    const addStatus = UseStatusStore(state => state.addStatus)

    // const handleSubmit = useCallback( async (dataS: any) => {
    //     try {
    //         const data = JSON.stringify(dataS);
    //         await api.post("status", {
    //             data
    //         });
    //     } catch (error) {
            
    //     }
    // }, []);

    // const envia = () => {
    //     handleSubmit(status);
    // };

    return (
        <FormBuilder op={Number(op)} data={data} campos={inputs} callBack={addStatus} urlBakc="status"/>
    );
};