import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { Status } from "../../../@types/status";

export const TipoBaseMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<any>("tipo-base", {
        params: {
            id: id
        },
    });
    const { data: status } = useFetch<Status[]>("status");
    const statusOptions = status?.map(item => { return { key: (item.id), value: item.nome } });
    
    const inputs: FormInputs[] = [
        {
            id: "id",
            name: "id",
            placeholder: "Código",
            label: "Código", 
            pixels: "250",
            type: InputType.NUMBER,
            disabled: true
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
            id: "icone",
            name: "icone",
            placeholder: "icone",
            label: "icone", 
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
            type: InputType.SELECT,
            list: statusOptions ?? statusOptions,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,
        },
    ];

    return (
        <FormBuilder
            op={Number(op)}
            data={data}
            campos={inputs}
            callBack={() => console.log()}
            urlBakc="tipo-base"
        />
    );
};