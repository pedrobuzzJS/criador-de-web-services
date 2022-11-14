import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { Status } from "../../../@types/status";

export const TipoWebServiceMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("tipowebservice", {
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
            type: InputType.TEXT,
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
            id: "sigla",
            name: "sigla",
            placeholder: "Sigla",
            label: "Sigla", 
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
        {
            id: "status_id",
            name: "status_id",
            placeholder: "Status",
            label: "Status", 
            pixels: "250",
            type: InputType.SELECT,
            list: statusOptions ?? statusOptions,
            disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,
        },
    ];

    return (
        <FormBuilder op={Number(op)} data={data} campos={inputs} callBack={() => console.log("nada")} />
    );
};