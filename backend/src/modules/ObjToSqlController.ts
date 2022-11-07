import { client } from "../infra/prisma/client";
import { Request, Response } from 'express';
import { ListWebServicesObjUseCase } from '../useCases/webServicesOjbUseCases/ListWebServices/ListWebServicesObjUseCase';
import { WebServiceObj } from "@prisma/client";
import { ListTableUseCase } from "../useCases/tabelaUseCases/listTable/ListTableUseCase";
export default class ObjToSqlController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listWebServiceObjUseCase = await new ListWebServicesObjUseCase();
        const objToSqlController = new ObjToSqlController();
        try {
            const webServiceObjResult: WebServiceObj[] = await listWebServiceObjUseCase.getById(Number(id));
            const obj = await JSON.parse(webServiceObjResult[0]?.obj);
            await objToSqlController.ObjToSql(obj, Number(id));
            if (webServiceObjResult) {
                return response.status(200).json(
                    {
                        webServiceObjResult
                    }
                );
            };
        } catch (error) {
            return response.status(404).json(
                {
                    "msg": "Not Found"
                }
            );
        };
    };

    async ObjToSql(obj: any, id: number) {
        const tableId = obj.tableId;
        const webServiceId = obj.webServiceId;
        const objJson: any[] = obj.data;
        const listTableUseCase = new ListTableUseCase();
        let select = "SELECT ";
        let columns = "";
        let from = "FROM ";
        let tb = await listTableUseCase.getById(tableId);
        from = from + tb[0].nome;
        await objJson.forEach(el => {
            columns = columns + el.nome + " ,";
        })
        columns = columns.substring(0, columns.length - 1);
        select = select + columns + from;
        await console.log(select);

        try {
            const updateWebServiceObj = await client.webServiceObj.update({
                where: {
                    id: Number(id)
                },
                data: {
                    sql: select,
                }
            });
            if (updateWebServiceObj) {
                // return response.json(
                //     {
                //         "msg" : "Successes"
                //     }
                // );
            };
        } catch (error) {
            // return response.status(500).json({
                // message: error
            // });
        };

    };
};