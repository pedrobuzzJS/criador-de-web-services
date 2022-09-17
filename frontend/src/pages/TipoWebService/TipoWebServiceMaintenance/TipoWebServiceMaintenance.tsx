import React from "react";
import { useParams } from "react-router-dom";
import { TipoWebService } from "../../../@types/tipo-web-service";
import { useFetch } from "../../../hooks/useFetch";

export const TipoWebServiceMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<TipoWebService[]>("status", {
        params: {
            id: id
        },
    })

    return (
        <></>
    );
}