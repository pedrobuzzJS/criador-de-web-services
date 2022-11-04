import React, { useState } from "react";
import { WebServiceRoute } from "../../../@types/webServiceRoutes";
import { DataGrid } from "../../../components/DataGrid/DataGrid";
import { useFetch } from "../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../Utils/Fields";
import { Operation } from "../../../Utils/Operations";

export const WebServiceRoutesQuery: React.FC = () => {
    const { data: status, loadding } = useFetch<WebServiceRoute[]>("webserviceroutes");
    const [ Campos, setCampos ] = useState<GridFields[]>(
        [
            {
                field: "id",
                title: "ID",
                description: "ID",
                type: FieldTypes.TEXT
            },
            {
                field: "webservice_id",
                title: "webservice_id",
                description: "webservice_id",
                type: FieldTypes.TEXT
            },
            {
                field: "werbservoceobj_id",
                title: "werbservoceobj_id",
                description: "werbservoceobj_id",
                type: FieldTypes.TEXT
            },
            {
                field: "route",
                title: "route",
                description: "route",
                type: FieldTypes.TEXT
            },
            {
                field: "acoes",
                title: "Acoes",
                description: "Acoes",
                type: FieldTypes.BUTTON,
                buttons: [
                    {
                        button: "webserviceroutes",
                        action: Operation.VIEW,
                        title: "Visualizar",
                        icon: "RiIcons.RiDashboardFill",
                        rotina: "webserviceroutes",
                    },
                    {
                        button: "webserviceroutes",
                        action: Operation.ALTER,
                        title: "Alterar",
                        icon: "RiIcons.RiDashboardFill",
                        rotina: "webserviceroutes",
                    },
                    {
                        button: "webserviceroutes",
                        action: Operation.DELETE,
                        title: "Deletar    ",
                        icon: "RiIcons.RiDashboardFill",
                        rotina: "webserviceroutes",
                    },
                ]
            },
        ]
    );

    return (
        <DataGrid
            columns={Campos}
            data={status}
            loading={loadding}
            pathMantencao="webserviceroutes"
        />
    );
};