import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Status } from "../../../@types/status";
import { useParams } from "react-router-dom";

export const StatusMaintenance: React.FC = () => {
    const { op, id } = useParams();
    const { data, loadding } = useFetch<Status[]>("status", {
        params: {
            id: id
        },
    })

    console.log("*** parametros operacao", op);
    console.log("*** parametros id", id);

    return (
        <h1>StatusMaintenance</h1>
    );
}