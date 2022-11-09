import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { FormBuilder } from "../../../components/Form/FormBuilder/FormBuilder";
import { FormInputs, InputType } from "../../../Utils/FormFields";
import { Operation } from "../../../Utils/Operations";
import { Status } from "../../../@types/status";
import { SelectList } from "../../../Utils/SelectList";

export const MenuMaintenance: React.FC = () => {
    const { id, op } = useParams();
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
            // {
            //     id: "parametros",
            //     name: "parametros",
            //     placeholder: "Parametros",
            //     label: "Parametros", 
            //     pixels: "250",
            //     type: InputType.TEXT,
            //     disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            // },
            {
                id: "rota",
                name: "rota",
                placeholder: "Rota",
                label: "Rota", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "icone",
                name: "icone",
                placeholder: "Ícone",
                label: "Ícone", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "pai_id",
                name: "pai_id",
                placeholder: "Códiigo do Pai",
                label: "Códiigo do Pai", 
                pixels: "250",
                type: InputType.NUMBER,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "ordem",
                name: "ordem",
                placeholder: "Ordem",
                label: "Ordem", 
                pixels: "250",
                type: InputType.NUMBER,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "desabilitado",
                name: "desabilitado",
                placeholder: "Desabilitado",
                label: "Desabilitado", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "papel",
                name: "papel",
                placeholder: "Papel",
                label: "Papel", 
                pixels: "250",
                type: InputType.NUMBER,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "permissao",
                name: "permissao",
                placeholder: "Permissao",
                label: "Permissao", 
                pixels: "250",
                type: InputType.NUMBER,
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
            {
                id: "component",
                name: "component",
                placeholder: "Componente",
                label: "Componente", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
            {
                id: "possuifilhos",
                name: "possuifilhos",
                placeholder: "Possui Filhos",
                label: "Possui Filhos", 
                pixels: "250",
                type: InputType.TEXT,
                disabled: [Operation.VIEW, Operation.DELETE].includes(Number(op)) ? true : false,   
            },
    ];
    
    const { data } = useFetch<any>("menu", {
        params: {
            id: id
        },
    });

    return (
        <>
            {data && <FormBuilder data={data} op={Number(op)} campos={inputs} urlBakc="menu" callBack={() => console.log("nada")} />}
        </>
    );
};